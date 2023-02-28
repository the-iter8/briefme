//Useless function we have to make such function though. 

export const getAvailData = (pref) => {
  const avail = [
    {
     keyID: 'MetalPrices',
      element: <MetalPrices />,
      availability: true,
    },
  ];

  const availabilityArr = avail.filter((item) => {
    return item?.availability;
  });
  return { availabilityArr };
};

export const MUIIconStyle = {
  padding: 0.2,
  boxShadow: '1px 4px 6px -2px rgba(0, 0, 0, 0.75)',
  opacity: 0.75,
  borderRadius: '8px',
};

export const insModalStyle = {
  borderRadius: 3,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  p: 4,
};
