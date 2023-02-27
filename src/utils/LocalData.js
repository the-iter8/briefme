export const getAvailData = (pref) => {
  const avail = [
    {
      keyName: 'MetalPrices',
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
  borderRadius: "8px",
};
