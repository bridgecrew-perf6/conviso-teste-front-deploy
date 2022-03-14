import { Box, Grid, Link, TextField, Typography, Button } from "@material-ui/core";
import React from "react";
import './Contato.css';

function Contato() {

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className='container-contato'>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={4}>
                    <form>
                        <Typography variant='h5' gutterBottom color='textPrimary' component='h5' align='left' className='textos2'>Contate-nos</Typography>
                        <Typography gutterBottom color='textSecondary' component='p' align='left' className='textos2'>Tem algum problema com o serviço ou feedback para nos dar?</Typography>
                        <TextField
                            label='assunto'
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                        />
                        <TextField
                            label='email'
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                        />
                        <TextField
                            label='conteúdo'
                            variant='outlined'
                            margin='normal'
                            multiline={true}
                            minRows={10}
                            fullWidth
                        />
                        <Box marginTop={2} textAlign='center'>
                            <Button type='submit' variant='contained' color='primary'>
                                enviar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>



        </Grid>
    );

}

export default Contato;