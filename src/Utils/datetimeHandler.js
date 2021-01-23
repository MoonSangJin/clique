export const getTimeDeltaString = (datetimeLate, datetimeEarly) => {
  console.log('late', datetimeLate);
  console.log('early', new Date(datetimeEarly));
  let delta = (datetimeLate - new Date(datetimeEarly)) / 1000;
  let minute = delta / 60;
  let hour = minute / 60;
  let day = hour / 24;
  let month = day / 30;
};
