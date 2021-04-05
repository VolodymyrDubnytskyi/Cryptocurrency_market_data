import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CryptoTHead from "./TableComponents/CryptoTHead";
import CryptoTBody from "./TableComponents/CryptoTBody";
import {
  Table,
  Paper,
  TablePagination,
  TableContainer,
} from "@material-ui/core";
import { cryptocurrencyTableStyle } from "./styles/cryptocurrencyTableStyle";
import {
  stableSort,
  getComparator,
} from "../../data/basicSortingFunctions";

const CryptocurrencyTable = (props) => {
  const { data, getIdOfTargetCrypto, currencySymbol } = props;
  const pages = [5, 10, 20];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pages[page]);
  const [order, setOrder] = useState();
  const [orderBy, setOrderBy] = useState();

  const useStyles = makeStyles(cryptocurrencyTableStyle);
  const classes = useStyles();

  const handleChangePage = (event, newPage) => setPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const rowsafterPaginationAndSorting = () => {
    return stableSort(data, getComparator(order, orderBy)).slice(
      page * rowsPerPage,
      (page + 1) * rowsPerPage
    );
  };
  const handleSort = (id) => {
    const isAsc = orderBy === id && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(id);
  };
  const {container, table_header} = classes;
  return (
    <Paper elevation={3} className={container}>
      <TableContainer>
        <Table size="medium">
          <CryptoTHead
            headerClass={table_header}
            orderBy={orderBy}
            order={order}
            handleSort={handleSort}
          />
          <CryptoTBody
            rowsafterPaginationAndSorting={rowsafterPaginationAndSorting}
            classes={classes}
            getIdOfTargetCrypto={getIdOfTargetCrypto}
            currencySymbol={currencySymbol}
          />
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        page={page}
        rowsPerPageOptions={pages}
        rowsPerPage={rowsPerPage}
        count={data.length}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
export default CryptocurrencyTable;
