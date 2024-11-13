import { ReactNode } from 'react'
import styled from 'styled-components'

export const List: React.ComponentType<{ className?: string, children: ReactNode }> = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding-right: 5px;
  overflow-y: auto;
`