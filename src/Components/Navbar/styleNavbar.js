export const stylesNavbar = (theme) => {
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
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 40px",
            margin: "auto",
            [theme.breakpoints.down("sm")]: {
              padding: "0 15px",
            },
          },
          logo_container: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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
    }  
}