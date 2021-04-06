import React from "react";
import Brightness6Icon from "@material-ui/icons/Brightness6";
import { Button } from "@material-ui/core";

const BgTheme = (props) => {
  const { changeTheme, classes } = props;
  const {bg_theme_btn, themeIcon} = classes;
  return (
    <Button className={bg_theme_btn} onClick={changeTheme}>
      <Brightness6Icon className={themeIcon} />
    </Button>
  );
};
export default BgTheme;
