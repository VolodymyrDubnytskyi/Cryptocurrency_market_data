import React, { useEffect, useState } from "react";
import Chart from "chart.js";
import LineChart from "./LineChart/LineChart";
import CryptocurrencyTable from "./CryptocurrencyTable/CryptocurrencyTable";
import CryptocurrencyInfo from "./CryptocurrencyInfo/CryptocurrencyInfo";
import SearchInput from "./SearchCrypto/SearchInput";
import Navbar from "./Navbar/Navbar";
import Currencies from "./Currencies/Currencies";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Box, CircularProgress, Typography } from "@material-ui/core";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import { mainStyles } from "./mainStyles";
import { cryptoListUrl } from "../data/cryptoListUrl";
import { colors } from "../data/colors";

const Main = () => {
  const [dataListCrypto, setDataListCrypto] = useState(null);
  const [dataTargetCryptoId, setDataTargetCryptoId] = useState("");
  const [fixedDataTargetCrypto, setFixedDataTargetCrypto] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [darkState, setDarkState] = useState(false);
  const [colorTheme, setColorTheme] = useState(`145, 100, 223,`);
  const [currency, setСurrency] = useState("usd");
  const [currencySymbol, setCurrencySymbol] = useState("$");
  const palletType = darkState ? "dark" : "light";
  const { main } = colors;
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        // main: main(1),
        main: `rgba(${colorTheme} 1)`,
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        tablet: 700,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });
  const useStyles = makeStyles((theme) =>
    mainStyles(theme, palletType, colorTheme)
  );
  const classes = useStyles();

  const getIdOfTargetCrypto = (id) => {
    setDataTargetCryptoId(id);
    localStorage.setItem("id", id);
  };

  const getDataOfAllCrypto = () => {
    fetch(cryptoListUrl(currency))
      .then((res) => res.json())
      .then((data) => {
        setDataListCrypto(data);
        setFixedDataTargetCrypto(data);
      })
      .catch((error) => console.log(error));
  };

  const searchAndFilter = (e) => {
    const inputValue = e.target.value;
    setSearchValue(inputValue);
    setDataListCrypto(
      fixedDataTargetCrypto.filter((item) =>
        item.name.toUpperCase().includes(inputValue.toUpperCase())
      )
    );
  };
  const changeCurrency = (banknote, symbol) => {
    setСurrency(banknote);
    setCurrencySymbol(symbol);
  };
  const changeTheme = () => {
    setDarkState(!darkState);
    localStorage.setItem("darkBg", !darkState);
  };
  useEffect(() => {
    getDataOfAllCrypto();
  }, [currency]);

  useEffect(() => {
    Chart.defaults.global.defaultFontFamily = "Roboto, sans-serif";
    const color = localStorage.getItem("themeColor");
    const darkBg = localStorage.getItem("darkBg");
    console.log(darkBg);
    color && setColorTheme(color);
    darkBg && setDarkState(JSON.parse(darkBg));
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        {dataListCrypto ? (
          <Box className={classes.main}>
            <CssBaseline />
            <Navbar
              title={"DonQuixote"}
              classes={classes}
              colorTheme={colorTheme}
              changeTheme={changeTheme}
              setColorTheme={setColorTheme}
            />
            <Currencies
              classes={classes}
              changeCurrency={changeCurrency}
              currency={currency}
            />
            <Box className={classes.cryptocurrency_container}>
              <Switch>
                <Route exact path="/">
                  <Typography
                    variant="h4"
                    component="h1"
                    className={classes.main_heading}
                  >
                    Cryptocurrency prices
                  </Typography>
                  <SearchInput
                    searchValue={searchValue}
                    searchAndFilter={searchAndFilter}
                    classes={classes}
                  />
                  <CryptocurrencyTable
                    data={dataListCrypto}
                    getIdOfTargetCrypto={getIdOfTargetCrypto}
                    currencySymbol={currencySymbol}
                  />
                </Route>
                <Route path={"/dashbord"}>
                  <CryptocurrencyInfo
                    palletType={palletType}
                    currency={currency}
                    currencySymbol={currencySymbol}
                  />
                  <LineChart
                    dataTargetCryptoId={dataTargetCryptoId}
                    currency={currency}
                    palletType={palletType}
                    colorTheme={colorTheme}
                  />
                </Route>
              </Switch>
            </Box>
          </Box>
        ) : (
          <CircularProgress className={classes.progresCircular} />
        )}
      </Router>
    </ThemeProvider>
  );
};
export default Main;
