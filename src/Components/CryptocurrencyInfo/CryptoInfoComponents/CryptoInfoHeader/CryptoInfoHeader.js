import React from "react";
import { Box } from "@material-ui/core";
import CryptoInfoHeaderCoinPrice from "./CryptoInfoHeaderCoinPrice";
import CryptoInfoHeaderBasicInfo from "./CryptoInfoHeaderBasicInfo";

const CryptoInfoHeader = (props) => {
  const { classes, data, currencySymbol, currency } = props;
  const { market_data, image, symbol, name } = data;
  return (
    <>
      <CryptoInfoHeaderBasicInfo
        classes={classes}
        image={image}
        symbol={symbol}
        name={name}
      />
      <Box>
        <CryptoInfoHeaderCoinPrice
          classes={classes}
          currencySymbol={currencySymbol}
          market_data={market_data}
          currency={currency}
        />
      </Box>
    </>
  );
};
export default CryptoInfoHeader;
