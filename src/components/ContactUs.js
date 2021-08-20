import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { validateAge, validateEmail, validateMessage, validateName } from './Validation';


const ContactUs = () => {

    const [name, setName] = React.useState("");
    const [age, setAge] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [errorName, setErrorName] = React.useState(false);
    const [helperName, setHelperName] = React.useState("");
    const [errorEmail, setErrorEmail] = React.useState(false);
    const [helperEmail, setHelperEmail] = React.useState("");
    const [errorAge, setErrorAge] = React.useState(false);
    const [helperAge, setHelperAge] = React.useState("");
    const [errorMessage, setErrorMessage] = React.useState(false);
    const [helperMessage, setHelperMessage] = React.useState("");

    const handleSignup = (e) => {
        e.preventDefault();
        var name = document.getElementById("tf-name").value;
        var email = document.getElementById("tf-email").value;
        var age = document.getElementById("tf-age").value;
        var message = document.getElementById("tf-message").value;

        // Validation Checking
        // ALL the validations are in different file called Validation.js

        if (!validateName(name)) {
            setHelperName("Only Alphabet");
            setErrorName(true);
            return
        }

        if (!validateEmail(email)) {
            setHelperEmail("Enter Proper Email");
            setErrorEmail(true);
            return
        }

        if (!validateAge(age)) {
            setHelperAge("Enter Age Between 25-45");
            setErrorAge(true);
            return
        }

        if (!validateMessage(message)) {
            setHelperMessage("Message shoud not be greater then 255 character");
            setErrorMessage(true);
            return
        }
        // If form is successfully submit then all the fields are empty
        setName("");
        setAge("");
        setEmail("");
        setMessage("");
    }


    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.id === "tf-name") {
            setHelperName("");
            setErrorName(false);
            setName(e.target.value);
        } else if (e.target.id === "tf-email") {
            setHelperEmail("");
            setErrorEmail(false);
            setEmail(e.target.value);
        } else if (e.target.id === "tf-age") {
            setHelperAge("");
            setErrorAge(false);
            setAge(e.target.value);
        } else if (e.target.id === "tf-message") {
            setHelperMessage("");
            setErrorMessage(false);
            setMessage(e.target.value);
        }

    }

    return (
        <Grid container justify="center" alignItems="center" style={{ width: "100%", height: "100vh", marginTop: 30 }}>
            <Grid item lg={5} md={8} sm={8} xs={12} /* <-- This is for better mobile performance */ style={{ padding: 20 }}>
                <Paper>
                    <form onSubmit={handleSignup} style={{ padding: 30 }}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item>
                                <Typography variant="h5">
                                    Contact Us
                                </Typography>
                            </Grid>
                            <Grid item >
                                <TextField
                                    autoFocus
                                    helperText={helperName}
                                    error={errorName}
                                    onChange={handleChange}
                                    id="tf-name"
                                    label="Name"
                                    value={name}
                                    required
                                    fullWidth />
                            </Grid>
                            <Grid item >
                                <TextField
                                    onChange={handleChange}
                                    helperText={helperAge}
                                    error={errorAge}
                                    id="tf-age"
                                    label="Age"
                                    value={age}
                                    required
                                    fullWidth />
                            </Grid>
                            <Grid item >
                                <TextField
                                    onChange={handleChange}
                                    helperText={helperEmail}
                                    error={errorEmail}
                                    id="tf-email"
                                    label="Email"
                                    value={email}
                                    required
                                    fullWidth />
                            </Grid>
                            <Grid item >
                                <TextField
                                    onChange={handleChange}
                                    helperText={helperMessage}
                                    error={errorMessage}
                                    id="tf-message"
                                    placeholder="Write here"
                                    multiline
                                    value={message}
                                    rows={6}
                                    variant="outlined"
                                    required
                                    fullWidth />
                            </Grid>
                            <Grid item align="right">
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary">SUBMIT</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default ContactUs;