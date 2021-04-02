import React from "react";
import { Box, Button, ButtonGroup } from "@material-ui/core";
import { currencies } from "../../data/currency";

const Currencies = (props) => {
  const { classes, changeCurrency, currency } = props;
  return (
    <Box className={classes.currency_btn_container}>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        {currencies.map((item) => {
          const { id, banknote, symbol } = item;
          return (
            <Button
              key={id}
              onClick={() => changeCurrency(banknote, symbol)}
              className={`${classes.currency_btn} ${
                banknote === currency && classes.active_btn
              }`}
            >
              {banknote}
            </Button>
          );
        })}
      </ButtonGroup>
    </Box>
  );
};
export default Currencies;
