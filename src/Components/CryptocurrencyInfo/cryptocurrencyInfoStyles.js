import { colors } from "../../data/colors";
const { priceIncrease, priceReduction } = colors;

export const cryptocurrencyInfoStyles = (theme, mixins) => {
  const { flexCenter } = mixins;
  return {
    flex_container: {
      ...flexCenter,
      justifyContent: 'flex-start',
      flexWrap: "wrap",
      padding: "5px 0",
      margin: 0,
    },
    market_data_header: {
      width: "100%",
      ...flexCenter,
      justifyContent: "space-between",
    },
    ctypto_name: {
      paddingLeft: "15px",
      fontSize: "32px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "24px",
      },
    },
    crypto_img: {
      width: "60px",
      height: "60px",
      [theme.breakpoints.down("xs")]: {
        width: "40px",
        height: "40px",
      },
    },
    coin_info_container: {
      width: "50%",
      margin: "10px 0",
    },
    coin_info: {
      paddingTop: "2px",
    },
    coin_price_box: {
      ...flexCenter,
      alignItems: "flex-end",
      flexDirection: "column",
    },
    coin_price: {
      [theme.breakpoints.down("xs")]: {
        fontSize: "24px",
      },
    },
    price_grow: {
      color: priceIncrease,
    },
    price_decrease: {
      color: priceReduction,
    },
    arrow: {
      marginBottom: "20px",
      fontSize: "35px",
      cursor: "pointer",
    },
    price_changes_paper: {
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        marginBottom: "25px",
      },
    },
    price_changes_container: {
      ...flexCenter,
     justifyContent: 'flex-start',
      alignSelf: "flex-end",
    },
    price_changes: {
      ...flexCenter,
      flexDirection: "column",
      width: "calc(100% / 6)",
      borderRight: "1px solid #dee2e6",
      "&:last-child": {
        borderRight: "none",
      },
    },
    price_changes_data: {
      textAlign: "center",
      padding: "5px 20px",
      width: "100%",
      [theme.breakpoints.down("lg")]: {
        padding: "5px 16px",
      },
      [theme.breakpoints.down("xs")]: {
        padding: "5px 7px",
        fontSize: "12px",
      },
    },
    price_changes_price: {
      borderTop: "1px solid #dee2e6",
    },
    market_data_container: {
      ...flexCenter,
      width: "100%",
      justifyContent: "space-between",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "flex-start",
      },
    },
    market_data: {
      ...flexCenter,
      justifyContent: "flex-start",
      maxWidth: "530px",
      width: "100%",
      margin: "25px 0",
      flexWrap: "wrap",
      padding: "0 5px",
    },
  };
};
