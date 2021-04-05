import React from "react";
import Logo from "./Logo";
import MainTheme from "./MainTheme";
import BgTheme from "./BgTheme";
import { Box, Paper, Typography } from "@material-ui/core";



const Header = (props) => {
  const { classes, changeTheme, title, setColorTheme, colorTheme } = props;
  const {header_container, header_box, logo_container, theme_container} = classes;
  return (
    <Paper elevation={3} className={header_container}>
      <Box className={header_box}>
        <Box className={logo_container}>
          <Logo classes={classes} colorTheme={colorTheme}/>
          <Typography varian="h6" component="h1">
            {title}
          </Typography>
        </Box>
        <Box className={theme_container}>
          <MainTheme setColorTheme={setColorTheme} classes={classes} colorTheme={colorTheme}/>
          <BgTheme changeTheme={changeTheme} classes={classes}/>
        </Box>
      </Box>
    </Paper>
  );
};
export default Header;
