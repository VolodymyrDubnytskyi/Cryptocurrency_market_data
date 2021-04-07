import React from "react";
import CryptoTBodyRow from "./CryptoTBodyRow";
import { TableBody } from "@material-ui/core";

const CryptoTBody = (props) => {
  const {
    classes,
    rowsafterPaginationAndSorting,
    getIdOfTargetCrypto,
    currencySymbol,
  } = props;
  return (
    <TableBody>
      {rowsafterPaginationAndSorting().map((crypto) => {
        const {id} = crypto;
          return (
            <CryptoTBodyRow
              key={id}
              crypto={crypto}
              classes={classes}
              getIdOfTargetCrypto={getIdOfTargetCrypto}
              currencySymbol={currencySymbol}
            />
          );
        })}
    </TableBody>
  );
};
export default CryptoTBody;
