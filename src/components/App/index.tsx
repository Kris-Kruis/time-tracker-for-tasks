
import { useAppDispatch, useAppSelector } from 'app-state/hooks'
import { createNewTask, removeAllTasks, setActiveTask, setStopwatchStarted, updateTask } from 'app-state/actions/todo-list'

import * as Styled from './styled'

const App: React.ComponentType<{}> = () => {
  const { tasks, activeTask, stopwatchStarted } = useAppSelector(({ todoList }) => todoList)

  const dispatch = useAppDispatch()

  const toolbarButtons = [
    {
      icon: 'plus',
      disabled: false,
      onClick: () => dispatch(createNewTask()),
    },
    {
      icon: 'clear',
      disabled: tasks.length === 0,
      onClick: () => {
        const result = window.confirm('Вы точно хотите очистить список задач?')

        if (result) {
          dispatch(removeAllTasks())
        }
      },
    }
  ]

  const stopwatchStartHandler = () => {
    if (activeTask === null) return
    dispatch(setStopwatchStarted(true))
  }

  const stopwatchPauseHandler = (ms: number) => {
    if (activeTask === null) return
    dispatch(setStopwatchStarted(false))
    dispatch(updateTask({ ...activeTask, taskTime: ms }))
  }

  const stopwatchFinishHandler = (ms: number) => {
    if (activeTask === null) return
    dispatch(setStopwatchStarted(false))
    dispatch(updateTask({ ...activeTask, hasDone: true, taskTime: ms }))
  }

  return (
    <Styled.App>
      <Styled.TodoListToolbar buttons={toolbarButtons} />
      <Styled.TodoList
        tasks={tasks}
        activeTask={activeTask}
        disabled={stopwatchStarted} 
        onClickTask={(id) => dispatch(setActiveTask(id))}
      />

      <Styled.Stopwatch
        name={activeTask?.id}
        disabled={activeTask === null || activeTask.hasDone}
        initialMs={activeTask !== null && !activeTask.hasDone ? activeTask.taskTime : 0}
        isSuccess={activeTask !== null && activeTask.hasDone}
        start={stopwatchStartHandler}
        pause={stopwatchPauseHandler}
        finish={stopwatchFinishHandler}
      />
    </Styled.App>
  )
}

export default App
