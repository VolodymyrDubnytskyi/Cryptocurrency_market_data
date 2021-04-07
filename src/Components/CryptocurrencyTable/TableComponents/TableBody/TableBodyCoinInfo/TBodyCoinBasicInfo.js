import React from "react";
import { TableCell, Avatar, Typography } from "@material-ui/core";

const TBodyCoinBasicInfo = (props) => {
  const { classes, crypto, currencySymbol} = props;
  const {
    image,
    name,
    symbol,
    current_price,
    market_cap_rank
  } = crypto;
  const { cryptoData, ctypto_table_name, crypto_table_symbol } = classes;
  return (
    <>
      <TableCell>{market_cap_rank}</TableCell>
      <TableCell className={cryptoData} align="left">
        <Avatar src={image} alt={name} />
        <Typography className={ctypto_table_name}>{name}</Typography>
        <Typography className={crypto_table_symbol}>{symbol}</Typography>
      </TableCell>
      <TableCell align="left">
        {currencySymbol}
        {current_price}
      </TableCell>
    </>
  );
};
export default TBodyCoinBasicInfo;
