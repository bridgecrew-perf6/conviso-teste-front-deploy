import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import {Typography, Box, Grid } from '@material-ui/core';
import './Footer.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if(token !== ""){
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={12}>
            <Box className='box1'>
                <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                    <Typography variant="h5" align="center" gutterBottom className='textos'>Ary © 2022 </Typography>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <a href="https://www.linkedin.com/in/ary-yoon-31909613b/" target="_blank" rel="noreferrer">
                        <LinkedInIcon className='redes' />
                    </a>
                    <a href="https://github.com/moggishere/" target="_blank" rel="noreferrer">
                        <GitHubIcon className='redes' />
                    </a>
                </Box>
            </Box>
        </Grid>
    </Grid>
    }
    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;