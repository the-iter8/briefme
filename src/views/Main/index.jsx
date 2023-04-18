import dynamic from "next/dynamic";
import React, { useContext } from "react";
import styles from "./Main.module.css";
import Text from "../../components/Text";
import useWindowSize from "../../utils/hooks/useWindowSize";
import { DataContext } from "../../utils/Contexts";
import { calcLayout } from "../../utils";
import AddWidgets from "../AddWidgets";
import Button from "../../components/Button";
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
  const screen = useWindowSize();

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
  const calcCols = () => {
    return screen.width / 128.260869565;
  };

  return (
    <div className={styles.root}>
      {userPref?.length !== 0 && openEditPref === false ? (
        <div className={styles.pref}>
          <GridLayout
            className='layout'
            layout={calcLayout()}
            allowOverlap={false}
            cols={calcCols()}
            rowHeight={140}
            width={screen.width - 30}
          >
            {dispArr?.map((item, index) => {
              return <div key={item.key}>{item.comp}</div>;
            })}
          </GridLayout>
        </div>
      ) : (
        <NoPref />
      )}
      <AddWidgets prefModal={prefModal} />
    </div>
  );
}
