import React from "react";
import { Box, TextField } from "@material-ui/core";

const SearchInput = (props) => {
  const { searchAndFilter, classes } = props;
  const {search_input_container} = classes;
  return (
    <Box className={search_input_container}>
      <TextField
        id="outlined-basic"
        label="Еnter a name"
        variant="outlined"
        fullWidth
        color="primary"
        onChange={(e)=>searchAndFilter(e)}
      />
    </Box>
  );
};

export default SearchInput;
