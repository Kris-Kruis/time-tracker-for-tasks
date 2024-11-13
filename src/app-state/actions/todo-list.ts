import { TODO_LIST_ACTIONS } from '../constants/todo-list'

import type { Task, TodoListAction } from '../../types'

export const createNewTask = (): TodoListAction => ({
  type: TODO_LIST_ACTIONS.CREATE_NEW_TASK,
})

export const removeTask = (id: string): TodoListAction => ({
  type: TODO_LIST_ACTIONS.REMOVE_TASK,
  payload: id,
})

export const removeAllTasks = (): TodoListAction => ({
  type: TODO_LIST_ACTIONS.REMOVE_ALL_TASKS,
})

export const setActiveTask = (id: string): TodoListAction => ({
  type: TODO_LIST_ACTIONS.SET_ACTIVE_TASK,
  payload: id,
})

export const updateTask = (task: Task): TodoListAction => ({
  type: TODO_LIST_ACTIONS.UPDATE_TASK,
  payload: task,
})

export const setStopwatchStarted = (stopwatchStarted: boolean): TodoListAction => ({
  type: TODO_LIST_ACTIONS.SET_COUNTER_STARTED,
  payload: stopwatchStarted,
})
