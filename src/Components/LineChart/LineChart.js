import React, { useEffect, useRef, useState } from "react";
import { Box, Paper } from "@material-ui/core";
import { Line } from "react-chartjs-2";
import { makeStyles } from "@material-ui/core/styles";
import { ineChartStyles } from "./styles/lineChartStyles";
import { colors } from "../../data/colors";
import BtnGroup from "./BtnGroup";
import { timeIntervalPriceChange } from "../../data/timeIntervalPriceChange";
import { lineChartData } from "../../data/lineChartData";

const LineChart = (props) => {
  const lineChart = useRef(null);
  const [dataTargetCrypto, setDataTargetCrypto] = useState("");
  const [dataTargetName, setDataTargetName] = useState("");
  const [timeInterval, setTimeInterval] = useState(30);
  const [selectedMarketData, setSelectedMarketData] = useState("prices");
  const { currency } = props;
  const { main } = colors;
  const useStyles = makeStyles(ineChartStyles);
  const classes = useStyles();
  const getDataOfTargetCrypto = (coin, chartPeriod) => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=${currency}&days=${chartPeriod}`
    )
      .then((res) => res.json())
      .then((data) => setDataTargetCrypto(data))
      .catch((error) => console.log(error));
  };
  const changeTimeInterval = (newInterval) => {
    setTimeInterval(newInterval);
  };
  const changeSelectedData = (newData) => {
    setSelectedMarketData(newData);
  };
  const data = (canvas) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 350);

    gradient.addColorStop(0, main(0.6));
    gradient.addColorStop(1, main(0));
    return {
      labels:
        dataTargetCrypto &&
        dataTargetCrypto[selectedMarketData].map(
          (crypto) => new Date(crypto[0])
        ),
      datasets: [
        {
          label: selectedMarketData === 'prices' ? 'Price' : 'Market Cap',
          data:
            dataTargetCrypto &&
            dataTargetCrypto[selectedMarketData].map(
              (crypto) => Math.round(crypto[1] * 100000) / 100000
            ),
          backgroundColor: gradient,
          borderColor: [main(1)],
          borderWidth: 2,
        },
      ],
    };
  };

  useEffect(() => {
    const id = localStorage.getItem("id");
    setDataTargetName(id.toUpperCase());
    getDataOfTargetCrypto(id, timeInterval);
    console.log(dataTargetCrypto);
    return currency;
  }, [currency, timeInterval, selectedMarketData]);
  return (
    <Box className={classes.dashbord_container}>
      <Box className={classes.dashbord_header}>
        <BtnGroup
          callback={changeTimeInterval}
          listOfItems={timeIntervalPriceChange}
          comparison={timeInterval}
          classes={classes}
        />
        <BtnGroup
          callback={changeSelectedData}
          listOfItems={lineChartData}
          comparison={selectedMarketData}
          classes={classes}
        />
      </Box>
      <Paper elevation={3} className={classes.dashbord_paper}>
        <Line
          ref={lineChart}
          data={data}
          height={400}
          width={600}
          options={{
            maintainAspectRatio: false,
            // animation: {
            //   duration: 1000,
            //   easing: 'linear',
            // },
            scales: {
              xAxes: [
                {
                  type: "time",
                  time: {
                    unit: "day",
                  },
                },
              ],
            },
          }}
        />
      </Paper>
    </Box>
  );
};
export default LineChart;
