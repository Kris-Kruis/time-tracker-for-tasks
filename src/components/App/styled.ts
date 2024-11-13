import React, { ReactNode } from 'react'
import { styled } from 'styled-components'

import List from 'components/TodoList'
import Toolbar from 'components/Toolbar'
import UiStopwatch from 'components/Stopwatch'

export const App: React.ComponentType<{ children: ReactNode }> = styled.div`
  width: 860px;
  height: max-content;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr max-content;
  grid-template-rows: 64px 1fr;
  grid-template-areas:
    'todo-list-toolbar stopwatch'
    'todo-list .';
  grid-column-gap: 50px;
  grid-row-gap: 15px;
`

export const TodoListToolbar: typeof Toolbar = styled(Toolbar)`
  grid-area: todo-list-toolbar;
  align-self: end;
`

export const TodoList: typeof List = styled(List)`
  grid-area: todo-list;
  height: 370px;
`

export const Stopwatch: typeof UiStopwatch = styled(UiStopwatch)`
  grid-area: stopwatch;
`
