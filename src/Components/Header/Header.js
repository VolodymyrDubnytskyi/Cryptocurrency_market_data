import React from "react";
import Logo from "./Logo";
import MainTheme from "./MainTheme";
import BgTheme from "./BgTheme";
import { Box, Paper, Typography } from "@material-ui/core";



const Header = (props) => {
  const { classes, changeTheme, title, setColorTheme, colorTheme } = props;
  return (
    <Paper elevation={3} className={classes.header_container}>
      <Box className={classes.header_box}>
        <Box className={classes.logo_container}>
          <Logo classes={classes} colorTheme={colorTheme}/>
          <Typography varian="h6" component="h1">
            {title}
          </Typography>
        </Box>
        <Box className={classes.theme_container}>
          <MainTheme setColorTheme={setColorTheme} classes={classes} colorTheme={colorTheme}/>
          <BgTheme changeTheme={changeTheme} classes={classes}/>
        </Box>
      </Box>
    </Paper>
  );
};
export default Header;
