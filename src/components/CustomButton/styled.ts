import React, { ReactNode } from 'react'
import { styled } from 'styled-components'

export const CustomButton: React.ComponentType<{
  children: ReactNode,
  $disabled: boolean,
  onClick: () => void,
}> = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: fit-content;

  ${({ $disabled }) => $disabled ? 'opacity: 0.3;' : 'cursor: pointer;'};
`
