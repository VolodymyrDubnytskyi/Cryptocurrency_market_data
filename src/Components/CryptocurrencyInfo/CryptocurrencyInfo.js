import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CryptoInfoHeader from "./CryptoInfoHeader";
import CryptoInfoMarketData from "./CryptoInfoMarketData";
import {
  setingUrl,
  getCoinInfo,
  getCoinPriceChanges,
} from "../../data/coinIfno";
import { cryptocurrencyInfoStyle } from "./styles/cryptocurrencyInfoStyle";
import BackToCryproList from "./BackToCryproList";

const CryptocurrencyInfo = (props) => {
  const [data, setData] = useState("");
  const [coinInfo, setCoinInfo] = useState("");
  const [coinPriceByPeriod, setCoinPriceByPeriod] = useState("");
  const { image, name, symbol, market_data } = data;
  const { palletType, currency, currencySymbol } = props;
  const useStyles = makeStyles((theme) =>cryptocurrencyInfoStyle(theme));
  const classes = useStyles();

  const getDataOfTargetCrypto = (id) => {
    fetch(setingUrl(id))
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        const { market_data } = data;
        const coinData = getCoinInfo(
          market_data.market_cap[currency]
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
          market_data.low_24h[currency]
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
          market_data.high_24h[currency]
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
          market_data.total_volume[currency]
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
          market_data.max_supply &&
            market_data.max_supply
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        );
        const coinPriceChanges = getCoinPriceChanges(market_data, currency);
        setCoinPriceByPeriod(coinPriceChanges);
        setCoinInfo(coinData);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    const id = localStorage.getItem("id");
    getDataOfTargetCrypto(id);
  }, [currency]);
  return (
    <Box component="section" className={classes.flex_container} width={"100%"}>
      <BackToCryproList classes={classes} palletType={palletType} />
      {data && (
        <>
          <Box className={classes.market_data_header}>
            <CryptoInfoHeader
              classes={classes}
              market_data={market_data}
              image={image}
              name={name}
              symbol={symbol}
              currency={currency}
              currencySymbol={currencySymbol}
            />
          </Box>
          <CryptoInfoMarketData
            coinInfo={coinInfo}
            classes={classes}
            market_data={market_data}
            coinPriceByPeriod={coinPriceByPeriod}
            currencySymbol={currencySymbol}
          />
        </>
      )}
    </Box>
  );
};
export default CryptocurrencyInfo;
