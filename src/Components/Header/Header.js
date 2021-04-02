import React from "react";
import Logo from "./Logo";
import {Box, Paper, Typography } from "@material-ui/core";
import Brightness6Icon from "@material-ui/icons/Brightness6";

const Header = (props) => {
  const { classes, changeTheme, title} = props;
  return (
    <Paper elevation={3} className={classes.header_container}>
      <Box className={classes.header_box}>
        <Box className={classes.logo_container}>
          <Logo classes={classes}/>
          <Typography varian="h6" component="h1">
            {title}
          </Typography>
        </Box>
        <Brightness6Icon onClick={changeTheme} className={classes.themeIcon} />
      </Box>
    </Paper>
  );
};
export default Header;
