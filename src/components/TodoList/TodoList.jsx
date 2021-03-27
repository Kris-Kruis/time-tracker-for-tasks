import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { nanoid } from 'nanoid';

import './TodoList.css';
import TodoItem from './components/TodoItem';
import Toolbar from '../Toolbar';
import { setTasks, clearTasks, setActiveTask } from '../../redux/actions/todo-list.actions';

function TodoList({ tasks, activeTask, counterStarted, setTasks, clearTasks, setActiveTask }) {
  const toolbarButtons = [
    {
      name: 'addTask',
      icon: 'add',
      isActive: true,
      onClick: () => {
        const newTask = {
          id: nanoid(5),
          label: `Новая задача`,
          taskTime: 0,
          hasDone: false,
        };
        
        setTasks([...tasks, newTask]);
      },
    },
    {
      name: 'clearTaskList',
      icon: 'clear',
      isActive: tasks.length > 0,
      onClick: () => {
        const result = window.confirm("Вы точно хотите очистить список задач?")

        if (result) {
          clearTasks()
        }
      },
    }
  ];

  return (
    <div className="todo-list">
      <div className="todo-list__toolbar">
        <Toolbar buttons={toolbarButtons} />
      </div>

      <div className="todo-list__items">
        { tasks.map(task => {
            return (
              <TodoItem
                key={task.id}
                item={task}
                isActive={activeTask && task.id === activeTask?.id}
                isDisabled={activeTask && counterStarted && task.id !== activeTask?.id}
                onClick={() => {
                  setActiveTask(task)
                }}
              />
            );
          })
        }
      </div>
    </div>
  );
}

TodoList.propTypes = {
  tasks: PropTypes.array,
  activeTask: PropTypes.object,
  counterStarted: PropTypes.bool,
  setTasks: PropTypes.func.isRequired,
  clearTasks: PropTypes.func.isRequired,
  setActiveTask: PropTypes.func.isRequired,
};

const mapStateToProps = ({ todoList }) => ({
  tasks: todoList.tasks,
  activeTask: todoList.activeTask,
  counterStarted: todoList.counterStarted,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setTasks,
  clearTasks,
  setActiveTask,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
