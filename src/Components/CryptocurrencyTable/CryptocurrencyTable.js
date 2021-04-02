import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CryptoTHead from "./TableComponents/CryptoTHead";
import CryptoTBody from "./TableComponents/CryptoTBody";
import {
  Table,
  Paper,
  TablePagination,
  TableContainer,
} from "@material-ui/core";
import {cryptocurrencyTableStyle} from "./styles/cryptocurrencyTableStyle";

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

  const stableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  };

  const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  };

  const getComparator = (order, orderBy) => {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
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
  return (
      <Paper elevation={3} className={classes.container}>
        <TableContainer>
          <Table size="medium">
            <CryptoTHead
              headerClass={classes.table_header}
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
