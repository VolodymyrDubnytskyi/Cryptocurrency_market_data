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
import { Box, CircularProgress } from "@material-ui/core";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import { mainStyles } from "./mainStyles";
import { cryptoListUrl } from "../data/cryptoListUrl";
import MainHeading from "./MainHeading";

const Main = () => {
  const [dataListCrypto, setDataListCrypto] = useState([]);
  const [dataTargetCryptoId, setDataTargetCryptoId] = useState("");
  const [fixedDataTargetCrypto, setFixedDataTargetCrypto] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [darkState, setDarkState] = useState(false);
  const [colorTheme, setColorTheme] = useState(`145, 100, 223,`);
  const [currency, setСurrency] = useState("usd");
  const [currencySymbol, setCurrencySymbol] = useState("$");
  const palletType = darkState ? "dark" : "light";
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: `rgba(${colorTheme} 1)`,
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
    const getDataOfAllCrypto = () => {
      fetch(cryptoListUrl(currency))
        .then((res) => res.json())
        .then((data) => {
          setDataListCrypto(data);
          setFixedDataTargetCrypto(data);
        })
        // .catch((error) => {
        // });
    };
    getDataOfAllCrypto();
  }, [currency]);

  useEffect(() => {
    Chart.defaults.global.defaultFontFamily = "Roboto, sans-serif";
    const color = localStorage.getItem("themeColor");
    const darkBg = localStorage.getItem("darkBg");
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
                <Route exact path="/cryptocurrency_market_data">
                  <MainHeading
                    title={"Cryptocurrency prices"}
                    classes={classes}
                  />
                  <SearchInput
                    searchValue={searchValue}
                    searchAndFilter={searchAndFilter}
                    classes={classes}
                  />
                  <CryptocurrencyTable
                    classes={classes}
                    data={dataListCrypto}
                    getIdOfTargetCrypto={getIdOfTargetCrypto}
                    currencySymbol={currencySymbol}
                  />
                </Route>
                <Route path={"/dashbord"}>
                  <CryptocurrencyInfo
                    classes={classes}
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
          <Box>
            <CircularProgress className={classes.progresCircular} />
          </Box>
        )}
      </Router>
    </ThemeProvider>
  );
};
export default Main;
