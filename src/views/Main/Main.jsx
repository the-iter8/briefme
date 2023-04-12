import React, { useContext, useState } from "react";
import styles from "./Main.module.css";
import dynamic from "next/dynamic";
import Text from "../../components/Text";
import { DataContext } from "../../utils/Contexts";
import AddWidgets from "../AddWidgets/AddWidgets";
import Button from "../../components/Button/";
import GridLayout from "react-grid-layout";
import { Responsive, WidthProvider } from "react-grid-layout";

//Dynamic Imports
const MetalPrices = dynamic(() => import("../../modules/MetalPrices"), { loading: () => "Loading..." });
const StockPrices = dynamic(() => import("../../modules/StockPrices"), { loading: () => "Loading..." });
const OnThisDay = dynamic(() => import("../../modules/OnThisDay"), {
  loading: () => "Loading...",
});
const Weather = dynamic(() => import("../../modules/Weather"), {
  loading: () => "Loading...",
});

const ResponsiveGridLayout = WidthProvider(Responsive);
export default function Main({ prefModal, data }) {
  const { userPref } = useContext(DataContext);
  const { openEditPref, setOpenEditPref } = prefModal;
  const { metalData, wikiData, stockData } = data;
  const layouts = {
    lg: [
      { i: "a", x: 0, y: 0, w: 2, h: 2, isResizable: true, isBounded: true },
      { i: "b", x: 2, y: 0, w: 2, h: 2, isResizable: false, isBounded: true },
      { i: "c", x: 4, y: 0, w: 2, h: 2, isResizable: false, isBounded: true },
      { i: "d", x: 6, y: 0, w: 1, h: 1, isResizable: true, isBounded: true },
      { i: "e", x: 8, y: 0, w: 2, h: 2, isResizable: false, isBounded: true },
    ],
  };

  // <GridLayout className='layout' layout={layout} cols={9} rowHeight={280} width={1200}></GridLayout>;
  const sortedUserArr = userPref?.sort((a, b) => {
    return a.id - b.id;
  });

  const availCardArray = [
    {
      id: 0,
      key: "a",
      keyID: "MP",
      comp: <MetalPrices data={metalData} />,
    },
    {
      id: 1,
      key: "b",
      keyID: "OTD",
      comp: <OnThisDay data={wikiData} />,
    },
    {
      id: 2,
      key: "c",
      keyID: "SP",
      comp: <StockPrices data={stockData} />,
    },
    {
      id: 3,
      key: "d",
      keyID: "WT",
      comp: <Weather />,
      
    },
  ];

  let dispArr = [];
  availCardArray.forEach((item) => {
    sortedUserArr.forEach((sortItem) => {
      if (sortItem.keyID === item.keyID) {
        dispArr.push(item);
      }
    });
  });

  const NoPref = () => {
    return (
      <div className={styles.noPref}>
        <div className={styles.noPrefText}>
          <Text align='center' size='sm' color='grey'>
            Currently, you don’t seem to have any active widgets,
          </Text>
          <Text align='center' size='sm' color='grey'>
            Click the “Add Widgets” Button to get started!
          </Text>
          <Button
            fontSize='sm'
            onClick={() => {
              setOpenEditPref(true);
            }}
          >
            Add Widgets
          </Button>
        </div>
      </div>
    );
  };
  return (
    <div className={styles.root}>
      {userPref?.length !== 0 && openEditPref === false ? (
        <div className={styles.pref}>
          <ResponsiveGridLayout
            breakpoints={{ lg: 1200, md: 1000, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 10, md: 4, sm: 6, xs: 4, xxs: 2 }}
            rowHeight={140}
            layouts={layouts}
            className='layout'
            autoSize={true}
            compactType={"horizontal"}
          >
            {dispArr?.map((item, index) => {
              return <div key={item.key}>{item.comp}</div>;
            })}
          </ResponsiveGridLayout>
        </div>
      ) : (
        <NoPref />
      )}
      <AddWidgets prefModal={prefModal} />
    </div>
  );
}
