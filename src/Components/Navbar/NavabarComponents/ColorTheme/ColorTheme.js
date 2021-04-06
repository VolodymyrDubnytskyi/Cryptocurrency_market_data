import React, { useState } from "react";
import ColorThemeColor from "./ColorThemeColor";
import { pageColorPallet } from "../../../../data/pageColorPallet";
import { MenuItem, Button, Menu, Box, Typography } from "@material-ui/core";
import ColorThemeBtn from "./ColorThemeBtn";

const ColorTheme = (props) => {
  const { setColorTheme, colorTheme, classes } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (color) => {
    setColorTheme(color);
    setAnchorEl(null);
    localStorage.setItem("themeColor", color);
  };
  return (
    <Box>
      <ColorThemeBtn classes={classes} handleClick={handleClick} />
      <Menu
        className={classes.color_theme_menu}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => handleClose(colorTheme)}
      >
        {pageColorPallet.map((colorInfo) => (
          <ColorThemeColor
            colorInfo={colorInfo}
            classes={classes}
            handleClose={handleClose}
          />
        ))}
      </Menu>
    </Box>
  );
};
export default ColorTheme;
