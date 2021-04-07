import React from "react";
import { Typography } from "@material-ui/core";

const MainHeading = (props) => {
    const {title, classes} = props;
    const {main_heading} = classes;
  return (
    <Typography variant="h4" component="h1" className={main_heading}>
      {title}
    </Typography>
  );
};
export default MainHeading;
