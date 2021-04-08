import React, { useEffect, useState } from "react";
import LineChartBtnGroup from "./LineChartBtnGroup";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Box, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { lineChartStyles } from "./lineChartStyles";
import { colors } from "../../data/colors";
import { timeIntervalPriceChange } from "../../data/timeIntervalPriceChange";
import { lineChartData } from "../../data/lineChartData";

const LineChart = (props) => {
  const [dataTargetCrypto, setDataTargetCrypto] = useState("");
  const [dataTargetName, setDataTargetName] = useState("");
  const [timeInterval, setTimeInterval] = useState(30);
  const [selectedMarketData, setSelectedMarketData] = useState("prices");
  const { currency, palletType, colorTheme } = props;
  const useStyles = makeStyles((theme) => lineChartStyles(theme, colorTheme));
  const classes = useStyles();
  const {
    darkChartLines,
    lightChartLines,
    lightChartLinesYAxis,
    darkBg,
    lightBg,
    lightTextSubtitle,
    darkTextSubtitle,
  } = colors;

  const changeTimeInterval = (newInterval) => setTimeInterval(newInterval);
  const changeSelectedData = (newData) => setSelectedMarketData(newData);
  const settingColor = (darkColor, lightColor) =>
    palletType === "dark" ? darkColor : lightColor;

  const options = {
    chart: {
      zoomType: "x",
      backgroundColor: "transparent",
    },
    title: {
      text: `Price of ${dataTargetName}`,
      style: {
        color: settingColor(lightBg, darkBg),
      },
    },
    subtitle: {
      text: "Click and drag in the plot area to zoom in",
      style: {
        color: settingColor(lightTextSubtitle, darkTextSubtitle),
      },
    },
    xAxis: {
      type: "datetime",
      crosshair: true,
      labels: {
        style: {
          color: settingColor(lightBg, darkBg),
        },
      },
      lineColor: settingColor(darkChartLines, lightChartLines),
      tickColor: settingColor(darkChartLines, lightChartLines),
    },
    yAxis: {
      gridLineColor: settingColor(darkChartLines, lightChartLinesYAxis),
      title: {
        text: null,
      },
      labels: {
        style: {
          color: settingColor(lightBg, darkBg),
        },
      },
    },
    series: [
      {
        type: "area",
        name: "price",
        showInLegend: false,
        data: dataTargetCrypto && dataTargetCrypto[selectedMarketData],
        color: `rgba(${colorTheme} 1)`,
      },
    ],
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
            [0, `rgba(${colorTheme} 1)`],
            [1, `rgba(${colorTheme} 0)`],
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
    const getDataOfTargetCrypto = (coin, chartPeriod) => {
      fetch(
        `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=${currency}&days=${chartPeriod}`
      )
        .then((res) => res.json())
        .then((data) => setDataTargetCrypto(data))
        .catch((error) => console.log(error));
    };
    getDataOfTargetCrypto(id, timeInterval);
  }, [currency, timeInterval, selectedMarketData]);
  useEffect(() => {
    const id = localStorage.getItem("id");
    setDataTargetName(id.charAt(0).toUpperCase() + id.slice(1));
  }, []);
  return (
    <Box className={classes.dashbord_container}>
      <Box className={classes.dashbord_header}>
        <LineChartBtnGroup
          callback={changeTimeInterval}
          listOfItems={timeIntervalPriceChange}
          comparison={timeInterval}
          classes={classes}
        />
        <LineChartBtnGroup
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
