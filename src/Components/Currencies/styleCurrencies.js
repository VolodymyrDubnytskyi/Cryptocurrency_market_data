export const styleCurrencies = (theme, mainColor) => {
  return {
    currency_btn_container: {
      width: "100%",
      maxWidth: "1675px",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    currency_btn: {
      "&:hover": {
        borderColor: mainColor,
      },
      [theme.breakpoints.down("xs")]: {
        padding: "5px 10px",
      },
    },
    currency_shortcut: {
      [theme.breakpoints.down("xs")]: {
        fontSize: "12px",
      },
    },
  };
};
