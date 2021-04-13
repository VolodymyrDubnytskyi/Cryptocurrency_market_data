import React from "react";
import { TableRow} from "@material-ui/core";
import { useHistory } from "react-router";
import TBodyCoinBasicInfo from "./TableBodyCoinInfo/TBodyCoinBasicInfo";
import TBodyCoinMarketData from "./TableBodyCoinInfo/TBodyCoinMarketData";

const CryptoTBodyRow = (props) => {
  const { classes, crypto, getIdOfTargetCrypto, currencySymbol } = props;
  const { id } = crypto;
  const { table_row } = classes;
  let history = useHistory();

  const createDashbord = (id) => {
    getIdOfTargetCrypto(id);
    history.push("/dashbord");
  };
  return (
    <TableRow key={id} onClick={() => createDashbord(id)} className={table_row}>
      <TBodyCoinBasicInfo
        classes={classes}
        crypto={crypto}
        currencySymbol={currencySymbol}
      />
      <TBodyCoinMarketData classes={classes} crypto={crypto}  />
    </TableRow>
  );
};
export default CryptoTBodyRow;
