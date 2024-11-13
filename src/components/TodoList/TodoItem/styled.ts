import React, { ReactNode } from 'react'
import { styled } from 'styled-components'

export const TodoItem: React.ComponentType<{
  children: ReactNode[],
  $active: boolean,
  $disabled: boolean,
  $done: boolean,
  $isEmpty: boolean,
  onClick: () => void,
}> = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  border: 2px solid #fff;
  background: #fff;
  cursor: pointer;

  ${({ $disabled }) =>
    $disabled && `
      opacity: 0.5;
      cursor: default;
    `};
  ${({ $done }) =>
    $done && `
      background-color: #bfffc3;
      border-color: #bfffc3;

      & input {
        background-color: #bfffc3;
      }
    `};
  ${({ $active }) => $active && 'border-color: #008b8b;'};
  ${({ $isEmpty }) => $isEmpty && 'border-color: red;'};
`

export const Time: React.ComponentType<{ children: string }> = styled.div`
  padding: 7px;
  align-self: center;
  flex-shrink: 0;
  font-size: 14px;
  opacity: 0.7;
`

export const Field: React.ComponentType<{ children: ReactNode[] }> = styled.div`
  width: 100%;
  display: flex;

  & input {
    height: 100%;
    flex-grow: 1;
    border: none;
    padding: 7px;
    font-size: 14px;
    text-overflow: ellipsis;
  }

  & input:not(:disabled):read-only {
    cursor: pointer;
  }
`

export const FieldButtons: React.ComponentType<{ children: ReactNode[] }> = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  padding: 7px;

`
