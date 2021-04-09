export const lineChartStyles = (theme) => {
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
        flexDirection: "column-reverse",
        alignItems: "flex-start",
      },
    }
  };
};
