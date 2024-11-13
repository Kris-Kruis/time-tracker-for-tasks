import TodoItem from './TodoItem'

import * as Styled from './styled'

import type { Task } from 'types'

interface TodoListProps {
  className?: string;
  disabled?: boolean;
  activeTask: Task | null;
  tasks: Task[];
  onClickTask: (id: string) => void;
}

const TodoList: React.ComponentType<TodoListProps> = ({
  className,
  disabled,
  tasks,
  activeTask,
  onClickTask,
}) => {
  return (
    <Styled.List className={className}>
      {tasks.map((task) => {
        const isActive = activeTask !== null && task.id === activeTask.id
        return (
          <TodoItem
            key={task.id}
            item={task}
            isActive={isActive}
            isDisabled={disabled && activeTask !== null && task.id !== activeTask.id}
            isRunning={isActive && disabled}
            onClick={() => {
              if (isActive) return
              onClickTask(task.id)
            }}
          />
        )
      })}
    </Styled.List>
  )
}

export default TodoList
