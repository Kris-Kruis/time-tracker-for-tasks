import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';

import './TodoItem.css';
import CustomButton from '../../../CustomButton';
import { setTasks } from '../../../../redux/actions/todo-list.actions';
import { getTimeString } from '../../../../helpers/counter';

function TodoItem({ item, isActive, isDisabled, tasks, onClick, setTasks }) {
  const [readOnly, setReadOnly] = useState(true);
  const [value, setValue] = useState(item.label);
  const [cacheValue, setCacheValue] = useState(value);
  const [isEmpty, setIsEmpty] = useState(false);

  const taskTimeString = getTimeString(item.taskTime);
  const itemClasses = classNames({
    'todo-item': true,
    'todo-item_active': isActive,
    'todo-item_disabled': isDisabled,
    'todo-item_done': item.hasDone,
    'todo-item_is-empty': isEmpty,
  });

  return (
    <div className={itemClasses} onClick={() => {
      if (!isDisabled) {
        onClick();
      }
    }}>
      <div className="todo-item__time">
        {taskTimeString}
      </div>

      <div className="todo-item__field">
        <input
          readOnly={readOnly}
          type="text"
          name={item.id}
          value={value}
          onChange={(event) => {
            const currentValue = event.target.value;

            setValue(currentValue);
            setIsEmpty(!currentValue);
          }}
        />

        <div className="field-buttons">
          { (readOnly && !item.hasDone) && <CustomButton
            icon="edit"
            onClick={() => {
              if (!isDisabled) {
                setReadOnly(false);
                setCacheValue(value);
              }
            }}
          />}

          { !readOnly && (
            <React.Fragment>
              <CustomButton
                icon="clear-field"
                onClick={() => {
                  setValue('');
                  setIsEmpty(true);
                }}
              />

              <CustomButton
                icon="save"
                onClick={() => {
                  if (!isDisabled) {
                    if (value?.length > 0) {
                      setReadOnly(true);
                    }
                  }
                }}
              />

              <CustomButton
                icon="cancel"
                onClick={() => {
                  if (!isDisabled) {
                    setIsEmpty(false);
                    setValue(cacheValue);
                    setReadOnly(true);
                  }
                }}
              />
            </React.Fragment>
          )}

          <CustomButton
            icon="remove"
            onClick={() => {
              const updatedTasks = tasks.filter(task => task.id !== item.id);
              setTasks(updatedTasks);
            }}
          />
        </div>
      </div>
    </div>
  );
}

TodoItem.propTypes = {
  item: PropTypes.object,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
  tasks: PropTypes.array,
  onClick: PropTypes.func,
  setTasks: PropTypes.func.isRequired,
};

TodoItem.defaultProps = {
  item: {},
  isActive: false,
  isDisabled: false,
  onClick: () => null, 
};

const mapStateToProps = ({ todoList }) => ({
  tasks: todoList.tasks,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setTasks,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
