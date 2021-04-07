import React from "react";
import { Box, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const CryptoInfoMarketDataCoin = (props) => {
  const { classes, currencySymbol, cryptoInfo } = props;
  const { coin_info_container, coin_info } = classes;
  const { name, data } = cryptoInfo;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Box className={coin_info_container}>
      {data && (
        <>
          <Typography variant={matches ? "subtitle1" : "h6"} component="h2">
            {name}
          </Typography>
          <Typography
            variant={matches ? "caption" : "body2"}
            component="p"
            className={coin_info}
          >
            {name !== "Max supply" && currencySymbol}
            {data}
          </Typography>
        </>
      )}
    </Box>
  );
};
export default CryptoInfoMarketDataCoin;
