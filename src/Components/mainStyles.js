import { navbarStyles } from "./Navbar/navbarStyles";
import { cryptocurrencyTableStyles } from "./CryptocurrencyTable/cryptocurrencyTableStyles";
import { cryptocurrencyInfoStyles } from "./CryptocurrencyInfo/cryptocurrencyInfoStyles";
import { currenciesStyles } from "./Currencies/currenciesStyles";
import { lineChartStyles } from "./LineChart/lineChartStyles";
import { styleSearchInput } from "./SearchCrypto/styleSearchInput";
import { colors } from "../data/colors";
const { darkBg, lightBg, white, darkThemeAcentBg, lightTextSubtitle } = colors;
const mixins = {
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  fixedCenter: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
};

export const mainStyles = (theme, palletType, colorTheme) => {
  const mainColor = `rgba(${colorTheme} 1)`;
  const navbarStyle = navbarStyles(theme, palletType, mixins);
  const cryptoInfoStyle = cryptocurrencyInfoStyles(theme, mixins);
  const lineChartStyle = lineChartStyles(theme);
  const currenciesStyle = currenciesStyles();
  const searchInputStyle = styleSearchInput(palletType);
  const { flexCenter, fixedCenter } = mixins;
  return {
    main: {
      ...flexCenter,
      backgroundColor: palletType === "light" ? lightBg : darkBg,
      minHeight: "100vh",
      padding: "85px 40px 40px 40px",
      flexDirection: "column",
      [theme.breakpoints.down("sm")]: {
        padding: "85px 15px 20px 15px",
      },
    },
    main_heading: {
      alignSelf: "flex-start",
      padding: "10px 0px 40px 0px",
      fontSize: "42px",
      color: mainColor,
      [theme.breakpoints.down("xs")]: {
        fontSize: "32px",
        padding: "30px 0px 20px 0px",
      },
    },
    cryptocurrency_container: {
      ...flexCenter,
      flexDirection: "column",
      maxWidth: "1675px",
      width: "100%",
    },
    progresCircular: {
      ...fixedCenter,
    },
    error_container: {
      ...fixedCenter,
    },
    currency_btn: {
      color: palletType === "light" ? darkThemeAcentBg : lightTextSubtitle,
      "&:hover": {
        borderColor: `rgba(${colorTheme} 1)`,
        backgroundColor: palletType === "light" ? white : darkThemeAcentBg,
      },
      [theme.breakpoints.down("xs")]: {
        padding: "5px 10px",
      },
    },
    active_btn: {
      borderColor: mainColor,
      boxShadow: `0 0 0 0.1rem ${`rgba(${colorTheme} 0.5)`}`,
      backgroundColor: palletType === "light" ? white : darkThemeAcentBg,
    },
    ...navbarStyle,
    ...currenciesStyle,
    ...searchInputStyle,
    ...cryptocurrencyTableStyles,
    ...cryptoInfoStyle,
    ...lineChartStyle,
  };
};
