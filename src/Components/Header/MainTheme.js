import React, { useState } from "react";
import {
  MenuItem,
  Button,
  Menu,
  Box,
  ListItemIcon,
  Tooltip,
  Fade,
  Typography,
} from "@material-ui/core";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import Brightness5Icon from "@material-ui/icons/Brightness5";
const colorPallet = [
  {
    id: 1,
    title: "rgb(145, 100, 223)",
    color: "145, 100, 223,",
    preference: "light",
  },
  {
    id: 2,
    title: "rgb(50, 100, 130)",
    color: "50, 100, 130,",
    preference: "light",
  },
  {
    id: 3,
    title: "rgb(222, 173, 60)",
    color: "222, 173, 60,",
    preference: "dark",
  },
];

const MainTheme = (props) => {
  const { setColorTheme, colorTheme, classes } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (color) => {
    setColorTheme(color);
    setAnchorEl(null);
    localStorage.setItem('themeColor', color);
  };
  return (
    <Box>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Color Theme
      </Button>
      <Menu
        className={classes.color_theme_menu}
        anchorEl={anchorEl}
        keepMounted
        TransitionComponent={Fade}
        open={Boolean(anchorEl)}
        onClose={() => handleClose(colorTheme)}
      >
        {colorPallet.map((item) => {
          const { title, color, id, preference } = item;
          return (
            <MenuItem
              key={id}
              style={{ color: `rgba(${color} 1)` }}
              onClick={() => handleClose(color)}
            >
              <ListItemIcon>
                {preference === "light" ? (
                  <Tooltip title={"light-bg"} placement="left-start">
                    <Brightness5Icon fontSize='small'/>
                  </Tooltip>
                ) : (
                  <Tooltip title={"dark-bg"} placement="left-start">
                    <Brightness2Icon fontSize='small'/>
                  </Tooltip>
                )}
              </ListItemIcon>
              <Typography variant="inherit" noWrap>
                {title}
              </Typography>
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
};
export default MainTheme;
