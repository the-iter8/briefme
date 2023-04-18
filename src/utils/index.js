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

export const calcLayout = () => {
  const layout = [
    { i: "a", x: 0, y: 0, w: 2, h: 2, isResizable: false, isBounded: true },
    { i: "b", x: 2, y: 0, w: 2, h: 2, isResizable: false, isBounded: true },
    { i: "c", x: 4, y: 0, w: 2, h: 2, isResizable: false, isBounded: true },
    { i: "d", x: 6, y: 0, w: 2, h: 1, isResizable: false, isBounded: true },
  ];

  return layout;
};