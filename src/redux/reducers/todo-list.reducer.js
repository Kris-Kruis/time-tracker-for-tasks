import { TODO_LIST_ACTIONS } from '../constants/todo-list.constants'

const initialTasks = [
  {
    id: 0,
    label: 'Задача 1',
    taskTime: 0,
    hasDone: false,
  },
  {
    id: 1,
    label: 'Задача 2',
    taskTime: 0,
    hasDone: false,
  },
  {
    id: 2,
    label: 'Задача 3',
    taskTime: 0,
    hasDone: false,
  },
  {
    id: 3,
    label: 'Задача 4',
    taskTime: 0,
    hasDone: false,
  },
  {
    id: 4,
    label: 'Задача 5',
    taskTime: 0,
    hasDone: false,
  },
  {
    id: 5,
    label: 'Задача 6',
    taskTime: 0,
    hasDone: false,
  },
  {
    id: 6,
    label: 'Задача 7',
    taskTime: 0,
    hasDone: false,
  }
];

const initialState = {
  tasks: [],
  activeTask: null,
  counterStarted: false,
};

export default function todoListReducer (state = initialState, action) {
  switch (action.type) {
    case TODO_LIST_ACTIONS.SET_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    case TODO_LIST_ACTIONS.CLEAR_TASKS:
      return {
        ...state,
        tasks: [],
      };
    case TODO_LIST_ACTIONS.SET_ACTIVE_TASK:
      return {
        ...state,
        activeTask: action.payload,
      };
    case TODO_LIST_ACTIONS.SET_COUNTER_STARTED:
      return {
        ...state,
        counterStarted: action.payload,
      };
    default:
      return state;
  }
}
