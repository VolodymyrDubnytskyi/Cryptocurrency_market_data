import React from "react";
import { Box, Typography } from "@material-ui/core";

const CryptoInfoHeaderCoinPrice = ( props) => {
    const {classes, currencySymbol, market_data, currency} = props;
    const {coin_price_box, coin_price, price_grow, price_decrease} = classes;
  return (
    <Box className={coin_price_box}>
      <Typography variant="h4" component="h4" className={coin_price}>
        {currencySymbol}
        {market_data.current_price[currency]
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
      </Typography>
      <Typography
        variant="subtitle1"
        component="p"
        className={
          market_data.price_change_percentage_24h > 0
            ? price_grow
            : price_decrease
        }
      >
        {Math.round(market_data.price_change_percentage_24h * 100) / 100}%
      </Typography>
    </Box>
  );
};
export default CryptoInfoHeaderCoinPrice;
