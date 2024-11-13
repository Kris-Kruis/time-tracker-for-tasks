import { combineReducers } from 'redux'
import todoListReducer from './todo-list-reducer'

export const rootReducer = combineReducers({
  todoList: todoListReducer,
})
