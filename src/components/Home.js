import { Button, Grid, Input, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles(theme => ({
    paper: {
        height: 200,
    }
}))


const Home = () => {

    const classes = useStyles();

    const [company, setCompany] = React.useState("");
    const [employee, setEmployee] = React.useState("");
    const [printCompany, setPrintCompany] = React.useState(false)
    const [printEmployee, setPrintEmployee] = React.useState(false)


    const handleCompanyChange = (e) => {
        setCompany(e.target.value);
    }

    const handleEmployeeChange = (e) => {
        setEmployee(e.target.value);
    }

    const handleCompanyButton = () => {
        setPrintCompany(true);
    }

    const handleEmployeeButton = () => {
        setPrintEmployee(true);
    }

    return (
        /* You submit the company value and print in employee side after that if you have to submit 
         employee value to print in company side then you have to refresh the page one time*/
        <Grid container justify="center" alignItems="center" style={{ height: "100vh" }}>
            <Grid item xs={12}>
                <Typography>You submit the company value and print in employee side after that if you have to submit
                    employee value to print in company side then befor that you have to refresh the page one time</Typography>
                <Grid container>
                    <Grid item xs={12} sm={12} md={6} lg={6} style={{ padding: 20 }}>
                        <Paper className={classes.paper}>
                            <Grid container direction="column" spacing={3} style={{ padding: "0px 30px 0px 30px" }}>
                                <Grid item>
                                    <Typography variant="h5">
                                        Company
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Input
                                        value={printEmployee ? employee : null}// if employee button click then employee text print
                                        placeholder="Write Text and press submit to see text in Employee input"
                                        onChange={handleCompanyChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item align="center">
                                    <Button variant="contained" color="primary" onClick={handleCompanyButton}>
                                        submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} style={{ padding: 20 }}>
                        <Paper className={classes.paper}>
                            <Grid container direction="column" spacing={3} style={{ padding: "0px 30px 0px 30px" }}>
                                <Grid item>
                                    <Typography variant="h5">
                                        Employee
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Input
                                        value={printCompany ? company : employee} //if company button click then company text print
                                        placeholder="Write Text and press submit to see text in Company input"
                                        onChange={handleEmployeeChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item align="center">
                                    <Button variant="contained" color="primary" onClick={handleEmployeeButton}>
                                        submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Home;