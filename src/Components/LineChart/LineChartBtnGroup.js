import React from "react";
import { Button, ButtonGroup } from "@material-ui/core";

const LineChartBtnGroup = (props) => {
  const { comparison, classes, callback, listOfItems } = props;
  const {currency_btn, active_btn} = classes;
  return (
    <ButtonGroup color="primary" aria-label="outlined primary button group">
      {listOfItems.map((item) => {
        const { id, title, details } = item;
        return (
          <Button
            key={id}
            className={`${currency_btn} ${
              comparison === details && active_btn
            }`}
            onClick={() => callback(details)}
          >
            {title}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};
export default LineChartBtnGroup;
