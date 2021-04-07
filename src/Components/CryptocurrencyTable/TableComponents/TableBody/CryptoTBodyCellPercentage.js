import React from 'react';
import { TableCell } from '@material-ui/core';

const CryptoTBodyCellPercentage =(props) => {
const {price_change, classes} = props;
const {price_up, price_down } = classes;
    return (
        <TableCell
        className={
          price_change > 0
            ? price_up
            : price_down
        }
      >
        {Math.round(price_change * 100) / 100}%
      </TableCell>
    )
}
export default CryptoTBodyCellPercentage;
