import { useState, useEffect, useRef, useCallback } from 'react'

import Toolbar from 'components/Toolbar'
import Clock from 'components/Clock'

import * as Styled from './styled'

import type { ToolbarButton } from 'types'

interface CounterProps {
  className?: string;
  name: string | void;
  disabled?: boolean;
  initialMs: number;
  isSuccess: boolean;
  start: () => void;
  pause: (ms: number) => void;
  finish: (ms: number) => void;
}

const Stopwatch: React.ComponentType<CounterProps> = ({
  className,
  name = 'default',
  initialMs,
  disabled,
  isSuccess,
  start,
  pause,
  finish,
}) => {
  const [isRunning, setIsRunning] = useState<boolean>(false)
  const [ms, setMs] = useState<number>(initialMs)
  const [unicornType, setUnicornType] = useState<string>('sleepingUnicorn')

  const intervalIdRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    setMs(initialMs)
    setUnicornType(isSuccess ? 'unicornSuccess' : initialMs === 0 ? 'sleepingUnicorn' : 'waitingUnicorn')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name])

  const startStopwatch = useCallback(() => {
    if (name === 'default' || isRunning) return

    setIsRunning(true)
    setUnicornType('waitingUnicorn')

    intervalIdRef.current = setInterval(() => {
      setMs((state) => state + 1000)
    }, 1000)

    start()
  }, [name, isRunning, start])

  const pauseStopwatch = useCallback(() => {
    if (name === 'default' || !isRunning) return

    if (intervalIdRef.current !== null) {
      clearInterval(intervalIdRef.current)
    }

    setIsRunning(false)
    pause(ms)
  }, [name, ms, isRunning, pause])

  const finishStopwatch = useCallback(() => {
    if (name === 'default' || ms === 0) return

    if (intervalIdRef.current !== null) {
      clearInterval(intervalIdRef.current)
    }

    setIsRunning(false)
    setUnicornType('unicornSuccess')
    finish(ms)
    setMs(0)
  }, [name, ms, finish])

  const toolbarButtons: ToolbarButton[] = [
    {
      icon: 'start',
      disabled: disabled || isRunning || unicornType === 'unicornSuccess',
      onClick: startStopwatch,
    },
    {
      icon: 'pause',
      disabled: disabled || !isRunning,
      onClick: pauseStopwatch,
    },
    {
      icon: 'completed',
      disabled: disabled || (!isRunning && ms === 0),
      onClick: finishStopwatch,
    }
  ]

  return (
    <Styled.Stopwatch className={className}>
      <Styled.Watcher type={unicornType} />

      <Styled.ClockContainer>
        <Clock milliseconds={ms} />
      </Styled.ClockContainer>

      <Styled.ToolbarContainer>
        <Toolbar buttons={toolbarButtons} />
      </Styled.ToolbarContainer>
    </Styled.Stopwatch>
  )
}

export default Stopwatch
