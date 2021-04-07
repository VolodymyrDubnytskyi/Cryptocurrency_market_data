import React from "react";
import { Paper, Typography, Box } from "@material-ui/core";

const CryptoPriceChanges = (props) => {
  const { coinPriceByPeriod, classes, matches } = props;
  const {
    price_changes,
    price_changes_paper,
    price_changes_container,
    price_changes_data,
    price_changes_price,
    price_decrease,
    price_grow,
  } = classes;
  return (
    <Paper className={price_changes_paper}>
      <Box className={price_changes_container}>
        {coinPriceByPeriod &&
          coinPriceByPeriod.map((item) => {
            const { period, id, data } = item;
            return (
              <Box className={price_changes} key={id}>
                <Typography className={price_changes_data}>
                  {period}
                </Typography>
                <Typography
                variant={matches ? 'body2' : 'body1'}
                  className={`
                  ${price_changes_data} 
                  ${price_changes_price} 
                  ${data > 0 ? price_grow : price_decrease}
                  `}
                >
                  {Math.round(data * 100) / 100}%
                </Typography>
              </Box>
            );
          })}
      </Box>
    </Paper>
  );
};
export default CryptoPriceChanges;
