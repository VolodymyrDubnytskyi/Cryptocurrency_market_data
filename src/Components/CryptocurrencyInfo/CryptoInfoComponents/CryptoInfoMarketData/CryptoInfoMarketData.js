import React from "react";
import { Box } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery  from "@material-ui/core/useMediaQuery";
import CryptoPriceChanges from "./CryptoPriceChanges";
import CryptoInfoMarketDataCoin from "./CryptoInfoMarketDataCoin";

const CryptoInfoMarketData = (props) => {
  const { coinInfo, classes, coinPriceByPeriod } = props;
  const {
    market_data_container,
    market_data,
  } = classes;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'))
  return (
    <Box className={market_data_container}>
      <Box className={market_data}>
        {coinInfo &&
          coinInfo.map((cryptoInfo) => {
            const { id } = cryptoInfo;
            return (
              <CryptoInfoMarketDataCoin  
              key={id}
              classes={classes}
              cryptoInfo={cryptoInfo}
              />
            );
          })}
      </Box>
      <CryptoPriceChanges
        coinPriceByPeriod={coinPriceByPeriod}
        classes={classes}
        matches={matches}
      />
    </Box>
  );
};
export default CryptoInfoMarketData;
