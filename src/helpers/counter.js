/**
 * Преобразовать миллисекунды в удобочитаемое время
 */
export const parseMillisecondsIntoReadableTime = (milliseconds) => {
  let seconds = parseInt((milliseconds / 1000) % 60);
  let minutes = parseInt((milliseconds / (1000 * 60)) % 60);
  let hours = parseInt((milliseconds / (1000 * 60 * 60)) % 24);
  
  hours = (hours < 10) ? `0${hours}` : hours;
  minutes = (minutes < 10) ? `0${minutes}`: minutes;
  seconds = (seconds < 10) ? `0${seconds}` : seconds;
  
  return {
    hours,
    minutes,
    seconds
  };
}

/**
* Получить строку времени
*/
export const getTimeString = (value) => {
  if (!value) {
    return '00:00:00';
  }

  const time = parseMillisecondsIntoReadableTime(value);

  return `${time.hours}:${time.minutes}:${time.seconds}`;
}
