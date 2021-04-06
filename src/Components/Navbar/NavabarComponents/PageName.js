import React from "react";
import Logo from "./Logo";
import { Box, Typography } from "@material-ui/core";

const PageName = (props) => {
  const { classes, title, colorTheme } = props;
  const { logo_container } = classes;
  return (
    <Box className={logo_container}>
      <Logo classes={classes} colorTheme={colorTheme} />
      <Typography varian="h6" component="h2">
        {title}
      </Typography>
    </Box>
  );
};
export default PageName;
