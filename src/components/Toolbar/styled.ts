import { ReactNode } from 'react'
import styled from 'styled-components'

export const Toolbar: React.ComponentType<{ className?: string, children: ReactNode }> = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`