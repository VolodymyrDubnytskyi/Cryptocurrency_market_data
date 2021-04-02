import React, { useEffect, useState } from "react";
import Chart from "chart.js";
import LineChart from "./LineChart/LineChart";
import CryptocurrencyTable from "./CryptocurrencyTable/CryptocurrencyTable";
import CryptocurrencyInfo from "./CryptocurrencyInfo/CryptocurrencyInfo";
import SearchInput from "./SearchCrypto/SearchInput";
import Header from "./Header/Header";
import Currencies from "./Currencies/Currencies";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Box, CircularProgress, Typography } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { mainStyles } from "./mainStyles";
import { cryptoListUrl } from "../data/cryptoListUrl";
import { colors } from "../data/colors";

const Main = () => {
  const [dataListCrypto, setDataListCrypto] = useState(null);
  const [dataTargetCryptoId, setDataTargetCryptoId] = useState("");
  const [fixedDataTargetCrypto, setFixedDataTargetCrypto] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [darkState, setDarkState] = useState(false);
  const [currency, setСurrency] = useState("usd");
  const [currencySymbol, setCurrencySymbol] = useState("$");
  const palletType = darkState ? "dark" : "light";
  const { main } = colors;
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: main(1),
      },
    },
  });
  const useStyles = makeStyles(mainStyles(palletType));
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
  };
  useEffect(() => {
    Chart.defaults.global.defaultFontFamily = "Roboto, sans-serif";
    getDataOfAllCrypto();
  }, [currency]);
  console.log(dataListCrypto);
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        {dataListCrypto ? (
          <Box className={classes.main}>
            <CssBaseline />
            <Header
              classes={classes}
              changeTheme={changeTheme}
              title={"DonQuixote"}
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
                  />
                </Route>
              </Switch>
            </Box>
            {/* <Footer classes={classes}/> */}
          </Box>
        ) : (
          <CircularProgress className={classes.progresCircular} />
        )}
      </Router>
    </ThemeProvider>
  );
};
export default Main;
