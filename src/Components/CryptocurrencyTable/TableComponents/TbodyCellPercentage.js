import React from 'react';
import { TableCell } from '@material-ui/core';

const TbodyCellPercentage =(props) => {
const {price_change, classes} = props;
    return (
        <TableCell
        className={
          price_change > 0
            ? classes.price_up
            : classes.price_down
        }
      >
        {Math.round(price_change * 100) / 100}%
      </TableCell>
    )
}
export default TbodyCellPercentage;
