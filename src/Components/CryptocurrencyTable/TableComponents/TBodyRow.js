import React, { useState } from "react";
import { TableCell, TableRow, Avatar, Box } from "@material-ui/core";
import { useHistory } from "react-router";
import TbodyCellPercentage from "./TbodyCellPercentage";

const TBodyRow = (props) => {
  const { classes, crypto, getIdOfTargetCrypto, currencySymbol } = props;
  const {
    id,
    market_cap_rank,
    market_cap,
    image,
    name,
    symbol,
    current_price,
    price_change_percentage_24h,
  } = crypto;
  let history = useHistory();
 
  const createDashbord = (id) => {
    getIdOfTargetCrypto(id)
    history.push('/dashbord')
  };
  return (
    <TableRow key={id} onClick={() => createDashbord(id)} className={classes.table_row}>
      <TableCell>{market_cap_rank}</TableCell>
      <TableCell className={classes.cryptoData} align="left">
        <Avatar src={image} alt={name} />
        <Box className={classes.ctypto_name}>{name}</Box>
        <Box className={classes.crypto_symbol}>{symbol}</Box>
      </TableCell>
      <TableCell align="left">{currencySymbol}{current_price}</TableCell>
      <TbodyCellPercentage classes={classes} price_change={price_change_percentage_24h}/>
      {/* <TbodyCellPercentage classes={classes} price_change={price_change}/> */}
      {/* <TbodyCellPercentage classes={classes} price_change={price_change}/> */}
      <TableCell>${market_cap}</TableCell>
    </TableRow>
  );
};
export default TBodyRow;
