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
