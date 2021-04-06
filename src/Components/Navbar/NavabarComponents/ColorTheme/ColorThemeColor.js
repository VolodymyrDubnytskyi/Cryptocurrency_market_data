import React from "react";
import {
  MenuItem,
  ListItemIcon,
  Tooltip,
  Typography,
} from "@material-ui/core";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import Brightness5Icon from "@material-ui/icons/Brightness5";

const ColorThemeColor = (props) => {
  const { colorInfo, classes, handleClose } = props;
  const { preference_icon } = classes;
  const { title, color, id, preference } = colorInfo;
  return (
    <MenuItem
      key={id}
      style={{ color: `rgba(${color} 1)` }}
      onClick={() => handleClose(color)}
    >
      <ListItemIcon className={preference_icon}>
        {preference === "light" ? (
          <Tooltip title={"Light Bg"} placement="left-start">
            <Brightness5Icon fontSize="small" />
          </Tooltip>
        ) : (
          <Tooltip title={"Dark Bg"} placement="left-start">
            <Brightness2Icon fontSize="small" />
          </Tooltip>
        )}
      </ListItemIcon>
      <Typography variant="inherit">{title}</Typography>
    </MenuItem>
  );
};
export default ColorThemeColor;
