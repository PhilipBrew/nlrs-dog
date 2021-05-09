/* eslint-disable no-plusplus */
const isAM = (hour) => (parseInt(hour) < 13 ? 'AM' : 'PM');

export const timeStringBuilder = (time) => {
  // Time: 01:00:00
  let timeStr = '';
  const timeArr = time.split(':');
  const timeFrom = `${timeArr[0]}:${timeArr[1]} ${isAM(timeArr[0])}`;
  let hourTo = (parseInt(timeArr[0]) + 1).toString();
  hourTo = hourTo === '24' ? '00' : hourTo;
  const timeTo = `${hourTo}:00 ${isAM(hourTo)}`;

  timeStr = `${timeFrom} - ${timeTo}`;

  return timeStr;
};

export const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
