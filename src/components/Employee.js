import { Grid, Typography } from '@material-ui/core';
import React from 'react';


const Employee = () => {


    return (
        <Grid contaier justify="center" alignItems="center" style={{height:"100vh"}}>
            <Grid item>
                <Typography variant="h5" style={{marginTop:100}}>
                    Employee Page
                </Typography>
            </Grid>
        </Grid>

    )
}


export default Employee;