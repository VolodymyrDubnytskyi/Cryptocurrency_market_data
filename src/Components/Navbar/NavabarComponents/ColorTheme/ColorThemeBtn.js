import React from "react";
import { Button, Typography } from "@material-ui/core";

const ColorThemeBtn = (props) => {
  const { handleClick, classes } = props;
  const { color_theme_text } = classes;
  return (
    <Button aria-haspopup="true" onClick={handleClick}>
      <Typography className={color_theme_text}>Color Theme</Typography>
    </Button>
  );
};
export default ColorThemeBtn;
