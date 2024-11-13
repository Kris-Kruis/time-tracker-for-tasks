import React, { ReactNode } from 'react'
import { styled } from 'styled-components'
import UiWatcher from 'components/Watcher'

export const Stopwatch: React.ComponentType<{ className?: string, children: ReactNode }> = styled.div`
  width: 175px;
  height: max-content;
`

export const Watcher: typeof UiWatcher = styled(UiWatcher)`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 15px;
`

export const ClockContainer: React.ComponentType<{ children: ReactNode }> = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`

export const ToolbarContainer: React.ComponentType<{ children: ReactNode }> = styled.div`
  display: flex;
  justify-content: center;
`
