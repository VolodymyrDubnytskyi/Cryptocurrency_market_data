import React from "react";
import { Box, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery  from "@material-ui/core/useMediaQuery";
import CryptoPriceChanges from "./CryptoPriceChanges";

const CryptoInfoMarketData = (props) => {
  const { coinInfo, classes, coinPriceByPeriod, currencySymbol } = props;
  const {
    market_data_container,
    market_data,
    coin_info_container,
    coin_info,
  } = classes;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'))
  return (
    <Box className={market_data_container}>
      <Box className={market_data}>
        {coinInfo &&
          coinInfo.map((cryptoInfo) => {
            const { id, name, data } = cryptoInfo;
            return (
              <Box key={id} className={coin_info_container}>
                {data && (
                  <>
                    <Typography variant={matches ? 'subtitle1' : 'h6'} component="h2">
                      {name}
                    </Typography>
                    <Typography
                      variant={matches ? 'caption' : 'body2'}
                      component="p"
                      className={coin_info}
                    >
                      {name !== "Max supply" && currencySymbol}
                      {data}
                    </Typography>
                  </>
                )}
              </Box>
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
