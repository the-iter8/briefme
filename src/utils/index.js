export function convertUnixTo24Hour(unixTimestamp) {
  var date = new Date(unixTimestamp * 1000); // Multiply by 1000 to convert seconds to milliseconds
  var hours = date.getHours();
  var minutes = date.getMinutes();

  var formattedTime = hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0");
  return formattedTime;
}

export const convertToC = (val) => {
  return (val - 273.15).toFixed(0) + "° C";
};