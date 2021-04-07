import React from "react";
import { MenuItem, ListItemIcon, Typography } from "@material-ui/core";
import ColorThemeTooltip from "./ColorThemeTooltip";

const ColorThemeColor = React.forwardRef((props, ref) => {
  const { colorInfo, classes, handleClose } = props;
  const { preference_icon } = classes;
  const { title, color, id, preference } = colorInfo;
  return (
    <MenuItem
      ref={ref}
      key={id}
      style={{ color: `rgba(${color} 1)` }}
      onClick={() => handleClose(color)}
    >
      <ListItemIcon className={preference_icon}>
        <ColorThemeTooltip preference={preference} />
      </ListItemIcon>
      <Typography>{title}</Typography>
    </MenuItem>
  );
});
export default ColorThemeColor;
