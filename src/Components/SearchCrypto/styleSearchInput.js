export const styleSearchInput = (palletType) => {
  return {
    search_input_container: {
      alignSelf: "flex-start",
      width: "100%",
      maxWidth: "350px",
      height: "55px",
      marginBottom: "30px",
      backgroundColor: palletType === "light" ? "#fff" : "#424242",
      borderRadius: "4px",
    },
  };
};
