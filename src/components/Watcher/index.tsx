import { unicornSuccessPng, sleepingUnicornPng, waitingUnicornPng } from '../../assets/images'

type StopwatchProps = {
  type: string;
  className?: string;
}

const WATCHER_IMAGE_PATHS: { [key: string]: string } = {
  sleepingUnicorn: sleepingUnicornPng,
  waitingUnicorn: waitingUnicornPng,
  unicornSuccess: unicornSuccessPng,
}

const Watcher: React.ComponentType<StopwatchProps> = ({ className, type }) => {
  const path = WATCHER_IMAGE_PATHS[type]

  if (!path) return null

  return (
    <img className={className} src={path} alt={type} width={64} height={64} />
  )
}

export default Watcher
