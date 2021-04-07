import React from "react";
import ColorTheme from "./NavabarComponents/ColorTheme/ColorTheme";
import BgTheme from "./NavabarComponents/BgTheme";
import PageName from "./NavabarComponents/PageName";
import { Box, Paper } from "@material-ui/core";

const Navbar = (props) => {
  const { classes, changeTheme, title, setColorTheme, colorTheme } = props;
  const {
    header_container,
    header_box,
    theme_container,
  } = classes;
  return (
    <Paper elevation={3} className={header_container}>
      <Box className={header_box}>
        <PageName classes={classes} title={title} colorTheme={colorTheme} />
        <Box className={theme_container}>
          <ColorTheme
            setColorTheme={setColorTheme}
            classes={classes}
            colorTheme={colorTheme}
          />
          <BgTheme changeTheme={changeTheme} classes={classes} />
        </Box>
      </Box>
    </Paper>
  );
};
export default Navbar;
