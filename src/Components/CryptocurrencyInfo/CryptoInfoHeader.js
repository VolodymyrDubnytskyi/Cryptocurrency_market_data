import React from "react";
import { Avatar, Box, Typography } from "@material-ui/core";

const CryptoInfoHeader = (props) => {
  const {
    classes,
    name,
    image,
    symbol,
    market_data,
    currencySymbol,
    currency,
  } = props;
  const {
    flex_container,
    crypto_img,
    ctypto_name,
    coin_price_box,
    coin_price,
    price_grow,
    price_decrease,
  } = classes;
  return (
    <>
      <Box className={flex_container}>
        <Avatar src={image.large} alt={name} className={crypto_img}></Avatar>
        <Typography variant="h2" component="h2" className={ctypto_name}>
          {name} ({symbol})
        </Typography>
      </Box>
      <Box>
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
      </Box>
    </>
  );
};
export default CryptoInfoHeader;
