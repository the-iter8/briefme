const dateObj = new Date();
export const dateParsed = {
  currentDate: dateObj.getDate(),
  currentMonth: dateObj.getMonth(),
  currentYear: dateObj.getFullYear(),
  currentTime: new Date(dateObj.getTime()).getHours(),
};
