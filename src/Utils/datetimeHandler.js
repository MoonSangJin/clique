export const getTimeDeltaString = (datetimeLate, datetimeEarly) => {
  let seconds = Math.floor((datetimeLate - new Date(datetimeEarly)) / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);
  let months = Math.floor(days / 30);

  if (seconds < 60) {
    return 'a few secs ago';
  } else if (minutes === 1) {
    return '1 min ago';
  } else if (minutes < 60) {
    return `${minutes} mins ago`;
  } else if (hours === 1) {
    return '1 hr ago';
  } else if (hours < 24) {
    return `${hours} hrs ago`;
  } else if (days === 1) {
    return '1 day ago';
  } else if (days < 30) {
    return `${days} days ago`;
  } else if (months === 1) {
    return '1 month ago';
  } else {
    return `${months} months ago`;
  }
};
