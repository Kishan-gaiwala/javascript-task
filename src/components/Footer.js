import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';



const useStyles = makeStyles(theme=>({
    root:{
        width:"100%",
        height:"100%",
        backgroundColor:"#3f51b5"
    },
    link:{
        textDecoration:"none",
        color:"white",
        cursor:"pointer"
    }
}))

const Footer = () => {

    const classes = useStyles();

    return (
        <Grid container className={classes.root} justify="center" alignItems="center">
            <Grid item xs={12}>
                <Grid container justify="space-between">
                    <Grid item style={{padding:"50px 0px 50px 150px"}}>
                        <Typography variant="h3" style={{color:"white"}}>
                            Company Name
                        </Typography>
                    </Grid>
                    <Grid item style={{padding:"50px 200px 50px 0px"}}>
                        <Typography style={{color:"white",fontWeight:"bold"}}>
                            Quick Links
                        </Typography><br/>
                        <Grid container direction="column">
                            <Grid item>
                                <Typography>
                                    <Link className={classes.link} to="/home">Home</Link>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography>
                                    <Link className={classes.link} to="/user">User</Link>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography>
                                    <Link className={classes.link} to="/contact-us">Contact Us</Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Footer;