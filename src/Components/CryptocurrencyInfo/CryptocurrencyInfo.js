import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import CryptoInfoHeader from "./CryptoInfoComponents/CryptoInfoHeader/CryptoInfoHeader";
import CryptoInfoMarketData from "./CryptoInfoComponents/CryptoInfoMarketData/CryptoInfoMarketData";
import {
  setingUrl,
  getCoinInfo,
  getCoinPriceChanges,
} from "../../data/coinIfno";
import BackToCryproList from "./BackToCryproList";

const CryptocurrencyInfo = (props) => {
  const [data, setData] = useState("");
  const [coinInfo, setCoinInfo] = useState("");
  const [coinPriceByPeriod, setCoinPriceByPeriod] = useState("");
  const { market_data } = data;
  const {
    palletType,
    currency,
    currencySymbol,
    classes,
    hasErrorConnet,
  } = props;
  const converData = (data) =>
    data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  useEffect(() => {
    const id = localStorage.getItem("id");
    const getDataOfTargetCrypto = (id) => {
      fetch(setingUrl(id))
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          const { market_data } = data;
          const coinData = getCoinInfo(
            converData(market_data.market_cap[currency]),
            converData(market_data.low_24h[currency]),
            converData(market_data.high_24h[currency]),
            converData(market_data.total_volume[currency]),
            market_data.max_supply && converData(market_data.max_supply)
          );
          const coinPriceChanges = getCoinPriceChanges(market_data, currency);
          setCoinPriceByPeriod(coinPriceChanges);
          setCoinInfo(coinData);
        })
        .catch((error) => hasErrorConnet(true));
    };
    getDataOfTargetCrypto(id);
    const updateData = setInterval(() => {
      getDataOfTargetCrypto();
    }, 600000);
    return () => clearInterval(updateData);
  }, [currency]);
  return (
    <Box component="section" className={classes.flex_container} width={"100%"}>
      <BackToCryproList classes={classes} palletType={palletType} />
      {data && (
        <>
          <Box className={classes.market_data_header}>
            <CryptoInfoHeader
              classes={classes}
              data={data}
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
