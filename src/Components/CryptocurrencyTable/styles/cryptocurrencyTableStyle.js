import {colors} from '../../../data/colors';
const {priceIncrease, priceReduction} = colors;
export const cryptocurrencyTableStyle = {
    cryptoData: { 
      display: "flex",
      alignItems: "center",
    },
    container: {
      width: "100%",
      margin: "auto",
    },
    ctypto_name: {
      marginLeft: "50px",
    },
    crypto_symbol: {
      flexGrow: "1",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      paddingRight: "50px",
      textTransform: "uppercase",
    },
    price_up: {
      color: priceIncrease,
    },
    price_down: {
      color: priceReduction,
    },
    table_header: {
      textTransform: "capitalize",
    },
    search_input: {
      width: "100%",
      height: "100%",
    },
    table_row: {
      cursor: 'pointer'
    }
  }