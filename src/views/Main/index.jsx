import React, { useContext, useState } from "react";
import styles from "./Main.module.css";
import dynamic from "next/dynamic";
import Text from "../../components/Text";
import useWindowSize from "../../utils/hooks/useWindowSize";
import { DataContext } from "../../utils/Contexts";
import { getLayout } from "../../utils";
import AddWidgets from "../AddWidgets";
import Button from "../../components/Button";
import ReactGridLayout from "react-grid-layout";
import { toast } from "react-toastify";
import LargeCard from "../../components/Cards/Large";
import SmallCard from "../../components/Cards/Small";
//Dynamic Imports
const MetalPrices = dynamic(() => import("../../modules/MetalPrices"), { loading: () => <LargeCard isLoading /> });
const StockPrices = dynamic(() => import("../../modules/StockPrices"), { loading: () => <LargeCard isLoading /> });
const OnThisDay = dynamic(() => import("../../modules/OnThisDay"), {
  loading: () => <LargeCard isLoading />,
});
const Youtube = dynamic(() => import("../../modules/Youtube"), {
  loading: () => <LargeCard isLoading />,
});
const Weather = dynamic(() => import("../../modules/Weather"), {
  loading: () => <SmallCard isLoading />,
});

export default function Main({ prefModal, data }) {
  const { userPref } = useContext(DataContext);
  const [layout, setLayout] = useState(getLayout());
  const { openEditPref, setOpenEditPref } = prefModal;
  const { metalData, wikiData, stockData } = data;
  const screen = useWindowSize();

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
    {
      id: 4,
      key: "e",
      keyID: "YT",
      comp: <Youtube />,
    },
  ];
  let tempPrefArr = [];
  const sortedUserArr = userPref?.sort((a, b) => {
    return a.id - b.id;
  });
  availCardArray.forEach((item) => {
    sortedUserArr.forEach((sortItem) => {
      if (sortItem.keyID === item.keyID) {
        tempPrefArr.push(item);
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
            type='primary'
            fontWeight='medium'
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
  const calcCols = () => {
    return screen.width / 130.260869565;
  };
  const handleLayoutChange = (layout) => {
    global.localStorage.setItem("layout", JSON.stringify(layout));
    setLayout(JSON.parse(global.localStorage.getItem("layout")));
    toast.success("The preferred layout has been loaded/saved.");
  };

  return (
    <div className={styles.root}>
      {userPref?.length !== 0 && openEditPref === false ? (
        <div className={styles.pref}>
          <ReactGridLayout
            className='layout'
            layout={layout}
            allowOverlap={false}
            cols={calcCols()}
            rowHeight={140}
            width={screen.width - 30}
            onLayoutChange={handleLayoutChange}
          >
            {tempPrefArr?.map((item, index) => {
              return (
                <div key={item.key} data-grid={{ w: 2, h: 2, x: 0, y: 0, isResizable: false, isBounded: true }}>
                  {item.comp}
                </div>
              );
            })}
          </ReactGridLayout>
        </div>
      ) : (
        <NoPref />
      )}
      <AddWidgets prefModal={prefModal} />
    </div>
  );
}
