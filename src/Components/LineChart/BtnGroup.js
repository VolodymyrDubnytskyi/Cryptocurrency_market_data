import React from "react";
import { Button, ButtonGroup } from "@material-ui/core";

const BtnGroup = (props) => {
  const { comparison, classes, callback, listOfItems } = props;
  return (
    <ButtonGroup color="primary" aria-label="outlined primary button group">
      {listOfItems.map((item) => {
        const { id, title, details } = item;
        return (
          <Button
            key={id}
            className={`${classes.currency_btn} ${
              comparison === details && classes.active_btn
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
export default BtnGroup;
