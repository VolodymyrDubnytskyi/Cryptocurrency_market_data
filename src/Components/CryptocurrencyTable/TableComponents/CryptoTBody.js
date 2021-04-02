import React from "react";
import TBodyRow from "./TBodyRow";
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
            <TBodyRow
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
