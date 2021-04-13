export const navbarStyles = (theme, palletType, mixins) => {
  const { flexCenter } = mixins;
  return {
    header_container: {
      position: "fixed",
      height: "70px",
      top: 0,
      right: 0,
      left: 0,
      zIndex: 2,
    },
    header_box: {
      width: "100%",
      height: "100%",
      maxWidth: "1755px",
      ...flexCenter,
      justifyContent: "space-between",
      padding: "0 40px",
      margin: "auto",
      [theme.breakpoints.down("sm")]: {
        padding: "0 15px",
      },
    },
    logo_container: {
      ...flexCenter,
      textDecoration: "none",
    },
    logo_text: {
      color: palletType === 'light' ? '#000':'#fff',
    },
    logo: {
      width: "50px",
      height: "60px",
      [theme.breakpoints.down("sm")]: {
        width: "40px",
        height: "50px",
      },
    },
    theme_container: {
      display: "flex",
      alignItems: "center",
    },
    color_theme_text: {
      [theme.breakpoints.down("xs")]: {
        fontSize: "12px",
      },
    },
    bg_theme_btn: {
      ...flexCenter,
      [theme.breakpoints.down("xs")]: {
        minWidth: "8px",
      },
    },
    preference_icon: {
      minWidth: "30px",
    },
  };
};
