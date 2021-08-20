import { Grid, Typography, Icon, makeStyles } from '@material-ui/core';
import React from 'react';
import ErrorIcon from '@material-ui/icons/Error';


const useStyles = makeStyles(theme => ({

   icon: {
        opacity: 0.3,
        fontSize:48
    },root:{
        height:350,
        width:"100%"
    }
}))

const DataNotFound = (props) => {

    const classes = useStyles();

    return (
        <Grid container direction="column" justify="center" alignItems="center" spacing={1} className={classes.root}>
            <Grid item >
                <Icon >
                    <ErrorIcon className={classes.icon}/>
                </Icon>
            </Grid>
            <Grid item>
                <Typography color="textSecondary">
                   Page Not Found
                </Typography>
            </Grid>
        </Grid>
    );
}

export default DataNotFound;