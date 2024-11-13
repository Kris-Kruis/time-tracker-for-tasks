/**
 * Преобразовать миллисекунды в удобочитаемое время
 */
export const parseMillisecondsIntoReadableTime = (milliseconds: number): { hours: number, minutes: number, seconds: number } => {
  return {
    hours: Math.floor((milliseconds / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((milliseconds / (1000 * 60)) % 60),
    seconds: Math.floor((milliseconds / 1000) % 60),
  }
}

/**
* Получить строку времени
*/
export const getTimeString = (value: number): string => {
  if (!value) return '00:00:00'

  const time = parseMillisecondsIntoReadableTime(value)
  const hours = (time.hours < 10) ? `0${time.hours}` : time.hours
  const minutes = (time.minutes < 10) ? `0${time.minutes}`: time.minutes
  const seconds = (time.seconds < 10) ? `0${time.seconds}` : time.seconds

  return `${hours}:${minutes}:${seconds}`
}
