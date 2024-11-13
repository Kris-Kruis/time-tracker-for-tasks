import { nanoid } from 'nanoid'

import { TODO_LIST_ACTIONS } from '../constants/todo-list'

import type { TodoListState, TodoListAction, Task } from 'types'

const initialTasks: Task[] = [
  {
    id: nanoid(5),
    label: 'Задача 1',
    taskTime: 0,
    hasDone: false,
  },
  {
    id: nanoid(5),
    label: 'Задача 2',
    taskTime: 0,
    hasDone: false,
  },
  {
    id: nanoid(5),
    label: 'Задача 3',
    taskTime: 0,
    hasDone: false,
  },
  {
    id: nanoid(5),
    label: 'Задача 4',
    taskTime: 0,
    hasDone: false,
  },
  {
    id: nanoid(5),
    label: 'Задача 5',
    taskTime: 0,
    hasDone: false,
  },
  {
    id: nanoid(5),
    label: 'Задача 6',
    taskTime: 0,
    hasDone: false,
  },
  {
    id: nanoid(5),
    label: 'Задача 7',
    taskTime: 0,
    hasDone: false,
  }
]

const initialState: TodoListState = {
  tasks: initialTasks,
  activeTask: null,
  stopwatchStarted: false,
}

export default function todoListReducer(state: TodoListState = initialState, action: TodoListAction): TodoListState {
  switch (action.type) {
    case TODO_LIST_ACTIONS.CREATE_NEW_TASK: {
      const newTask = {
        id: nanoid(5),
        label: 'Новая задача',
        taskTime: 0,
        hasDone: false,
      }
      return { ...state, tasks: [...state.tasks, newTask] }
    }

    case TODO_LIST_ACTIONS.UPDATE_TASK: {
      const updatedTaskIndex = Boolean(action.payload) ? state.tasks.findIndex((task) => task.id === action.payload.id) : -1
      const tasks = [...state.tasks]

      if (updatedTaskIndex !== -1) {
        tasks.splice(updatedTaskIndex, 1, action.payload)
      }

      return { ...state, tasks }
    }

    case TODO_LIST_ACTIONS.REMOVE_TASK: {
      const tasks = Boolean(action.payload) ? state.tasks.filter((task) => task.id !== action.payload) : state.tasks
      return { ...state, tasks }
    }

    case TODO_LIST_ACTIONS.REMOVE_ALL_TASKS:
      return { ...state, tasks: [] }

    case TODO_LIST_ACTIONS.SET_ACTIVE_TASK: {
      const activeTask = Boolean(action.payload) ? state.tasks.find((task) => task.id === action.payload) : null
      return activeTask ? { ...state, activeTask } : state
    }

    case TODO_LIST_ACTIONS.SET_COUNTER_STARTED:
      return {
        ...state,
        stopwatchStarted: action.payload ?? false,
      }

    default:
      return state
  }
}
