import React from "react";
import {Avatar, Box, Typography } from "@material-ui/core";

const CryptoInfoHeaderBasicInfo = (props) => {
  const { classes, symbol, name, image} = props;
  const {flex_container,crypto_img, ctypto_name} = classes;
  return (
    <Box className={flex_container}>
      <Avatar src={image && image.large} alt={name} className={crypto_img}></Avatar>
      <Typography variant="h2" component="h2" className={ctypto_name}>
        {name} ({symbol})
      </Typography>
    </Box>
  );
};
export default CryptoInfoHeaderBasicInfo;
