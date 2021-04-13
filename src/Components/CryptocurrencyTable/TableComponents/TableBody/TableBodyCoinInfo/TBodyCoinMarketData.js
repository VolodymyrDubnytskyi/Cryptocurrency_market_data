import React from "react";
import { TableCell} from "@material-ui/core";
import CryptoTBodyCellPercentage from "../CryptoTBodyCellPercentage";

const TBodyCoinMarketData = (props) => {
  const { classes, crypto } = props;
  const { market_cap, price_change_percentage_24h, market_cap_change_percentage_24h } = crypto;
  return (
    <>
      <CryptoTBodyCellPercentage
        classes={classes}
        price_change={price_change_percentage_24h}
      />
      <CryptoTBodyCellPercentage
        classes={classes}
        price_change={market_cap_change_percentage_24h}
      />
      <TableCell>${market_cap}</TableCell>
    </>
  );
};
export default TBodyCoinMarketData;
