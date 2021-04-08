import React from "react";
import ArrowBackTwoToneIcon from "@material-ui/icons/ArrowBackTwoTone";
import { Link } from "react-router-dom";

const BackToCryproList = (props) => {
  const { palletType, classes } = props;
  return (
    <Link to="/cryptocurrency_market_data" style={{ color: palletType === "light" ? "#000" : "#fff" }}>
      <ArrowBackTwoToneIcon className={classes.arrow} />
    </Link>
  );
};
export default BackToCryproList;
