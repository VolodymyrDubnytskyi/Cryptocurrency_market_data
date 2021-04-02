import { colors } from "../../../data/colors";
const { main} = colors;
export const ineChartStyles = {
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
    },
    currency_btn: {
      "&:hover": {
        borderColor: main(1),
      },
    },
    active_btn: {
      borderColor: main(1),
      boxShadow: `0 0 0 0.1rem ${main(0.5)}`,
    },
  }