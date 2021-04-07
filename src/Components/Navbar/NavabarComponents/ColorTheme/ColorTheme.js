import React, { useState } from "react";
import ColorThemeColor from "./ColorThemeColor";
import { pageColorPallet } from "../../../../data/pageColorPallet";
import { Menu, Box } from "@material-ui/core";
import ColorThemeBtn from "./ColorThemeBtn";

const ColorTheme = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { setColorTheme, colorTheme, classes } = props;
  const {color_theme_menu} = classes;

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (color) => {
    setColorTheme(color);
    setAnchorEl(null);
    localStorage.setItem("themeColor", color);
  };
  
  return (
    <Box>
      <ColorThemeBtn
        classes={classes}
        handleClick={handleClick}
        title={"Color Theme"}
      />
      <Menu
        className={color_theme_menu}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => handleClose(colorTheme)}
      >
        {pageColorPallet.map((colorInfo) => {
          const { id } = colorInfo;
          return (
            <ColorThemeColor
              key={id}
              colorInfo={colorInfo}
              classes={classes}
              handleClose={handleClose}
            />
          );
        })}
      </Menu>
    </Box>
  );
};
export default ColorTheme;
