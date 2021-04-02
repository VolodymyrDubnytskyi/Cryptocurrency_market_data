import React from 'react';
import { headerData} from '../../../data/tableHeaderData';
import {
  TableCell,
  TableRow,
  TableHead,
  TableSortLabel,
} from "@material-ui/core";

const CryptoTHead = props =>{
  const {headerClass, orderBy, order, handleSort} = props;
    return(
        <TableHead>
        <TableRow className={headerClass}>
          {headerData.map((item) => {
            const { id, name } = item;
            return (
              <TableCell
                key={id}
                sortdirection={orderBy === id ? order : "asc"}
              >
                <TableSortLabel
                  active={orderBy === id}
                  direction={orderBy === id ? order : "asc"}
                  onClick={() => handleSort(id)}
                >
                  {name}
                </TableSortLabel>
              </TableCell>
            );
          })}
        </TableRow>
      </TableHead>
    )
}
export default CryptoTHead;