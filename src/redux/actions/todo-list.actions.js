import { TODO_LIST_ACTIONS } from '../constants/todo-list.constants';

export const setTasks = (tasks) => ({
  type: TODO_LIST_ACTIONS.SET_TASKS,
  payload: tasks,
});

export const clearTasks = () => ({
  type: TODO_LIST_ACTIONS.CLEAR_TASKS,
});

export const setActiveTask = (task) => ({
  type: TODO_LIST_ACTIONS.SET_ACTIVE_TASK,
  payload: task,
});

export const setCounterStarted = (counterStarted) => ({
  type: TODO_LIST_ACTIONS.SET_COUNTER_STARTED,
  payload: counterStarted,
});
