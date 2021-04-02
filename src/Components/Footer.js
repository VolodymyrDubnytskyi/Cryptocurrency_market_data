import React from 'react';
import { Box, Typography } from '@material-ui/core';

const Footer = (props)=> {
    const { classes} = props;
    return (
        <Box className={classes.footer} variant={'subtitle2'}>
           <Typography>Created by Volodymyr Dubnytskyi</Typography>            
        </Box>
    )
}
export default Footer;
