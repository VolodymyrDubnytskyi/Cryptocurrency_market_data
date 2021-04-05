import React from "react";
import Brightness6Icon from "@material-ui/icons/Brightness6";
import { Button } from "@material-ui/core";

const BgTheme = (props) => {
  const { changeTheme, classes } = props;
  return (
    <Button className={classes.bg_theme_container} onClick={changeTheme}>
      <Brightness6Icon className={classes.themeIcon} />
    </Button>
  );
};
export default BgTheme;
