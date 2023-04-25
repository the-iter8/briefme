import { toast } from "react-toastify";
export function convertUnixTo24Hour(unixTimestamp) {
  var date = new Date(unixTimestamp * 1000); // Multiply by 1000 to convert seconds to milliseconds
  var hours = date.getHours();
  var minutes = date.getMinutes();

  var formattedTime = hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0");
  return formattedTime;
}

export const getLayout = () => {
  const defaultLayout = [
    { i: "a", x: 0, y: 0, w: 2, h: 2, isResizable: false, isBounded: true },
    { i: "b", x: 2, y: 0, w: 2, h: 2, isResizable: false, isBounded: true },
    { i: "c", x: 4, y: 0, w: 2, h: 2, isResizable: false, isBounded: true },
    { i: "d", x: 6, y: 0, w: 2, h: 1, isResizable: false, isBounded: true },
    { i: "e", x: 6, y: 0, w: 2, h: 2, isResizable: false, isBounded: true },
  ];

  if (global.localStorage.getItem("layout")) {
    const currentLayout = JSON.parse(global.localStorage.getItem("layout"));

    return currentLayout;
  } else {
    return defaultLayout;
  }
};

export const handleAddLocalPref = (keyID, title, localUserPref, setLocalUserPref) => {
  let flag = 0;
  localUserPref?.forEach((item) => {
    if (item.keyID === keyID) flag++;
  });
  if (flag === 0 && localUserPref) {
    const newArr = [
      ...localUserPref,
      {
        keyID: keyID,
      },
    ];
    setLocalUserPref(newArr);
    toast(`Added ${title}`);
  }
};

export const handleRemovePref = (keyID, title, localUserPref, setLocalUserPref) => {
  let newArr = [];
  let flag = 0;
  newArr = localUserPref?.filter((item) => {
    if (item.keyID === keyID) flag = 1;
    return item.keyID !== keyID;
  });
  if (flag) {
    setLocalUserPref(newArr);
    toast(`Removed ${title}`);
  }
};

export const convertToC = (val) => {
  return (val - 273.15).toFixed(0) + "° C";
};
