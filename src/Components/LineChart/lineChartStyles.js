export const lineChartStyles = (theme, colorTheme) => {
  return {
    dashbord_container: {
      width: "100%",
      alignSelf: "flex-end",
    },
    dashbord_paper: {
      width: "100%",
    },
    dashbord_header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      [theme.breakpoints.down("xs")]: {
        flexDirection: 'column-reverse',
        alignItems: 'flex-start'
      },
    },
    currency_btn: {
      "&:hover": {
        borderColor: `rgba(${colorTheme} 1)`,
      },
      [theme.breakpoints.down("xs")]: {
        padding: '5px 10px'
      },
    },
    active_btn: {
      borderColor:  `rgba(${colorTheme} 1)`,
      boxShadow: `0 0 0 0.1rem  rgba(${colorTheme} 0.5)`,
    },
  };
};
