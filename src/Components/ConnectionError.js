import React from 'react'
import { Box, Typography } from '@material-ui/core';

const ConnectionError = (props) => {
    const { classes} = props;
    const { error_container} = classes;
    return (
        <Box className={error_container}>
            <Typography variant={'h2'} component={'h3'}>
                Connection Error. Page not faund!
            </Typography>
        </Box>
    )
}
export default ConnectionError;