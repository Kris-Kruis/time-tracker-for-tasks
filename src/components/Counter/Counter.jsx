import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './Counter.css';
import Toolbar from '../Toolbar';
import Clock from '../Clock';
import { setTasks, setCounterStarted } from '../../redux/actions/todo-list.actions';

function Counter({ tasks, activeTask, counterStarted, setTasks, setCounterStarted }) {
  const [taskTime, setTaskTime] = useState(0);
  const [statusTimer, setStatusTimer] = useState(false);
  let timeoutId = null;

  useEffect(() => {
    if (activeTask && !activeTask.hasDone) {
      setTaskTime(activeTask.taskTime);
    } else {
      setTaskTime(0);
    }
  }, [activeTask]);

  useEffect(() => {
    if (statusTimer) {
      // TODO. Сделать, чтобы счет начинался в ту же секунду, а не через 1
      timeoutId = setTimeout(() => {
        setTaskTime(taskTime + 1000);
      }, 1000);
    }
  }, [statusTimer, taskTime]);

  const toolbarButtons = [
    {
      name: 'start',
      icon: 'start',
      isActive: Boolean(activeTask) && !activeTask.hasDone && !counterStarted,
      onClick: () => {
        setCounterStarted(true);
        setStatusTimer(true);
      }
    },
    {
      name: 'pause',
      icon: 'pause',
      isActive: counterStarted,
      onClick: () => {
        setCounterStarted(false);
        setStatusTimer(false);
        clearTimeout(timeoutId);

        const updatedTasks = tasks.map(task => {
          if (task.id === activeTask.id) {
            task.taskTime = taskTime;
          }
          return task;
        });

        setTasks(updatedTasks);
      },
    },
    {
      name: 'completed',
      icon: 'completed',
      isActive: Boolean(activeTask) && !activeTask.hasDone,
      onClick: () => {
        setCounterStarted(false);
        setStatusTimer(false);
        clearTimeout(timeoutId);

        // TODO. Сохранить новое время в store
        const updatedTasks = tasks.map(task => {
          if (task.id === activeTask.id) {
            task.taskTime = taskTime;
            task.hasDone = true;
          }
          return task;
        });

        setTasks(updatedTasks);

        setTaskTime(0);
      },
    }
  ];

  return (
    <div className="counter">
      <div className="counter__clock">
        <Clock milliseconds={taskTime} />
      </div>

      <div className="counter__toolbar">
        <Toolbar buttons={toolbarButtons} />
      </div>
    </div>
  );
}

Counter.propTypes = {
  tasks: PropTypes.array,
  activeTask: PropTypes.object,
  counterStarted: PropTypes.bool,
  setTasks: PropTypes.func.isRequired,
  setCounterStarted: PropTypes.func.isRequired,
};

const mapStateToProps = ({ todoList }) => ({
  tasks: todoList.tasks,
  activeTask: todoList.activeTask,
  counterStarted: todoList.counterStarted,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setTasks,
  setCounterStarted,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// Начать
// Приостановить
// Завершить