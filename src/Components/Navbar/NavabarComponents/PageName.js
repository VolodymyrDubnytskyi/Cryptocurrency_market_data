import React from "react";
import Logo from "./Logo";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const PageName = (props) => {
  const { classes, title, colorTheme } = props;
  const { logo_container, logo_text } = classes;
  return (
    <Link to={'/'} className={logo_container}>
      <Logo classes={classes} colorTheme={colorTheme} />
      <Typography varian="h6" component="h2" className={logo_text}>
        {title}
      </Typography>
    </Link>
  );
};
export default PageName;
