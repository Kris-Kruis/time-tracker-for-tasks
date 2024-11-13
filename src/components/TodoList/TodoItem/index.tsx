import { useState } from 'react'

import CustomButton from 'components/CustomButton'
import { useAppDispatch } from 'app-state/hooks'
import { removeTask } from 'app-state/actions/todo-list'
import { getTimeString } from '../../../helpers/counter'

import * as Styled from './styled'

import type { Task } from 'types'

type TodoItemProps = {
  item: Task;
  isActive?: boolean;
  isDisabled?: boolean;
  isRunning?: boolean;
  onClick: () => void;
}

function TodoItem({ item, isActive = false, isDisabled = false, isRunning = false, onClick }: TodoItemProps) {
  const [readOnly, setReadOnly] = useState(true)
  const [value, setValue] = useState(item.label)
  const [cacheValue, setCacheValue] = useState(value)
  const [isEmpty, setIsEmpty] = useState(false)

  const dispatch = useAppDispatch()

  const taskTimeString = getTimeString(item.taskTime)

  const todoItemClickHandler = () => {
    if (isDisabled) return
    onClick()
  }

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = event.target.value
    setValue(currentValue)
    setIsEmpty(!currentValue)
  }

  return (
    <Styled.TodoItem $active={isActive} $disabled={isDisabled} $done={item.hasDone} $isEmpty={isEmpty} onClick={todoItemClickHandler}>
      <Styled.Time>
        {taskTimeString}
      </Styled.Time>

      <Styled.Field>
        <input
          readOnly={readOnly || isRunning}
          type="text"
          name={item.id}
          value={value}
          disabled={isDisabled}
          onChange={inputChangeHandler}
        />

        <Styled.FieldButtons>
          {(readOnly && !item.hasDone) && (
            <CustomButton
              icon="edit"
              disabled={isRunning}
              onClick={() => {
                setReadOnly(false)
                setCacheValue(value)
              }}
            />
         )}

          {!readOnly && (
            <>
              <CustomButton
                icon="clearField"
                disabled={isRunning || isEmpty}
                onClick={() => {
                  setValue('')
                  setIsEmpty(true)
                }}
              />

              <CustomButton
                icon="save"
                disabled={isRunning || isEmpty}
                onClick={() => {
                  if (value?.length > 0) {
                    setReadOnly(true)
                  }
                }}
              />

              <CustomButton
                icon="cancel"
                disabled={isRunning}
                onClick={() => {
                  setIsEmpty(false)
                  setValue(cacheValue)
                  setReadOnly(true)
                }}
              />
            </>
          )}

          <CustomButton
            icon="remove"
            disabled={isRunning}
            onClick={() => {
              dispatch(removeTask(item.id))
            }}
          />
        </Styled.FieldButtons>
      </Styled.Field>
    </Styled.TodoItem>
  )
}

export default TodoItem
