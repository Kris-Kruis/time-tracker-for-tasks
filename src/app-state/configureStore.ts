import { configureStore } from '@reduxjs/toolkit'

import { rootReducer } from './reducers/root-reducer'

// import todoListReducer from './reducers/todo-list.reducer'

// const composeEnhancer = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 })) || compose

// const configureStore = () => {
//   const store = createStore(rootReducer)

//   return { store }
// }

export const store = configureStore({
  reducer: rootReducer,
})
