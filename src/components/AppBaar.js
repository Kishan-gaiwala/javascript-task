import React from 'react';
import { AppBar, Grid, makeStyles, Toolbar, Typography, Button, Popover, Icon } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles(theme => ({
    link: {
        cursor: "pointer",
        textDecoration: "none",
        color: "white"
    },
    dropdownlink: {
        padding: "4px 15px 4px 15px",
        color: "black",
        textDecoration: "none"
    },
    button: {
        color: "white",
        textTransform: "none",
        cursor: "pointer"
    }
}))

const AppBaar = () => {

    const classes = useStyles();

    const [open, setOpen] = React.useState(null);

    const handleClick = (e) => {
        setOpen(e.currentTarget)
    }

    return (
        <AppBar>
            <Toolbar>
                <Grid container alignItems="center" justify="flex-end" spacing={5} style={{ padding: "0px 30px 0px 0px" }}>
                    <Grid item>
                        <Typography >
                            <Link className={classes.link} to="/home">Home</Link>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography>
                            <Link className={classes.link} to="/user">User</Link>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Grid container>
                            <Grid item>
                                <Grid container alignItems="center" className={classes.button} onClick={handleClick}>
                                    <Grid item>
                                        <Typography >
                                            Company
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Icon>
                                            <ExpandMoreIcon />
                                        </Icon>
                                    </Grid>
                                </Grid>
                                <Popover
                                    open={open}
                                    anchorEl={open}
                                    onClose={() => { setOpen(null) }}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                    }}
                                >
                                    <Typography><Link className={classes.dropdownlink} to="/company">Company</Link></Typography>
                                    <Typography><Link className={classes.dropdownlink} to="/Employee">Employee</Link></Typography>
                                </Popover>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography>
                            <Link className={classes.link} to="/contact-us">Contact Us</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar >
    );
}

export default AppBaar;