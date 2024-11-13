import { getTimeString } from '../../helpers/counter'

import * as Styled from './styled'

interface ClockProps {
  milliseconds: number;
}

const Clock: React.ComponentType<ClockProps> = ({ milliseconds }) => {
  const timeString = getTimeString(milliseconds)

  return (
    <Styled.Clock>{timeString}</Styled.Clock>
  )
}

export default Clock
