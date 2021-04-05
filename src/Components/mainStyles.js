import { colors } from "../data/colors";
const { darkBg, lightBg } = colors;
export const mainStyles = (theme,palletType, colorTheme) => {
  const mainColor = `rgba(${colorTheme} 1)`;
  return {
    main: {
      backgroundColor: palletType === "light" ? lightBg : darkBg,
      minHeight: "100vh",
      padding: "85px 40px 40px 40px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      [theme.breakpoints.down("sm")]: {
        padding: "85px 15px 20px 15px",
      },
    },
    header_container: {
      position: "fixed",
      height: "70px",
      top: 0,
      right: 0,
      left: 0,
      zIndex: 2,
    },
    header_box: {
      width: "100%",
      height: "100%",
      maxWidth: "1755px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 40px",
      margin: "auto",
      [theme.breakpoints.down("sm")]: {
        padding: "0 15px",
      },
    },
    theme_container: {
      display: "flex",
      alignItems: "center",
    },
    color_theme_menu: {
      padding: 0,
    },
    main_heading: {
      alignSelf: "flex-start",
      paddingBottom: "40px",
      fontSize: "42px",
      color: mainColor,
    },
    search_input_container: {
      alignSelf: "flex-start",
      width: "100%",
      maxWidth: "350px",
      height: "55px",
      marginBottom: "30px",
      backgroundColor: palletType === "light" ? "#fff" : "#424242",
      borderRadius: "4px",
    },
    logo_container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    logo: {
      width: "50px",
      height: "60px",
    },
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
    },
    active_btn: {
      borderColor: mainColor,
      boxShadow: `0 0 0 0.1rem ${`rgba(${colorTheme} 0.5)`}`,
    },
    cryptocurrency_container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      maxWidth: "1675px",
      width: "100%",
    },
    footer: {
      position: "fixed",
      bottom: 0,
      right: 0,
      padding: "20px",
    },
    progresCircular: {
      position: "fixed",
      top: "50%",
      left: "50%",
    },
    bg_theme_container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }
  };
};
