import React from "react";
import { Tooltip } from "@material-ui/core";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import Brightness5Icon from "@material-ui/icons/Brightness5";

const ColorThemeTooltip = (props) => {
  const { preference } = props;
  return (
    <Tooltip
      title={preference === "light" ? "Light Bg" : "Dark Bg"}
      placement="left-start"
    >
      {preference === "light" ? (
        <Brightness5Icon fontSize="small" />
      ) : (
        <Brightness2Icon fontSize="small" />
      )}
    </Tooltip>
  );
};
export default ColorThemeTooltip;
