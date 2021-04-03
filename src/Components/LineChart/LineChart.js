import React, { useEffect, useRef, useState } from "react";
import { Box, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ineChartStyles } from "./styles/lineChartStyles";
import { colors } from "../../data/colors";
import BtnGroup from "./BtnGroup";
import { timeIntervalPriceChange } from "../../data/timeIntervalPriceChange";
import { lineChartData } from "../../data/lineChartData";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const LineChart = (props) => {
  const lineChart = useRef(null);
  const [dataTargetCrypto, setDataTargetCrypto] = useState("");
  const [dataTargetName, setDataTargetName] = useState("");
  const [timeInterval, setTimeInterval] = useState(30);
  const [selectedMarketData, setSelectedMarketData] = useState("prices");
  const { currency, palletType } = props;
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
  const options = {
    chart: {
      zoomType: "x",
      backgroundColor: "transparent",
      plotBorderColor: "#606063",
    },
    title: {
      text: "Price",
      style: {
        color: palletType === "dark" && "#fff",
      },
    },
    xAxis: {
      type: "datetime",
      crosshair: true,
      labels: {
        style: {
          color: palletType === "dark" && "#E0E0E3",
        },
      },
    },
    yAxis: {
      title: {
        text: null,
      },
      labels: {
        style: {
            color: palletType === "dark" && "#E0E0E3",
        }
    },
    },
    series: [
      {
        type: "area",
        name: `Price`,
        showInLegend: false,
        data: dataTargetCrypto && dataTargetCrypto[selectedMarketData],
        color: main(1),
      },
    ],
    legend: {
      itemStyle: {
        color: "#ffff",
      },
    },
    plotOptions: {
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
          },
          stops: [
            [0, main(1)],
            [1, main(0)],
          ],
        },
        marker: {
          radius: 2,
        },
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 1,
          },
        },
        threshold: null,
      },
    },
  };

  useEffect(() => {
    const id = localStorage.getItem("id");
    setDataTargetName(id.toUpperCase());
    getDataOfTargetCrypto(id, timeInterval);
    return currency;
  }, [currency, timeInterval, selectedMarketData]);
  console.log(dataTargetCrypto);
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
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Paper>
    </Box>
  );
};
export default LineChart;
