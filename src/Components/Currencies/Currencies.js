import React from "react";
import { Box, Button, ButtonGroup, Typography } from "@material-ui/core";
import { currencies } from "../../data/currency";

const Currencies = (props) => {
  const { classes, changeCurrency, currency } = props;
  const {currency_shortcut, currency_btn_container, currency_btn, active_btn} = classes;
  return (
    <Box className={currency_btn_container}>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        {currencies.map((item) => {
          const { id, banknote, symbol } = item;
          return (
            <Button
              key={id}
              onClick={() => changeCurrency(banknote, symbol)}
              className={`${currency_btn} ${
                banknote === currency && active_btn
              }`}
            >
             <Typography variant={'body2'} className={currency_shortcut}>{banknote}</Typography> 
            </Button>
          );
        })}
      </ButtonGroup>
    </Box>
  );
};
export default Currencies;
