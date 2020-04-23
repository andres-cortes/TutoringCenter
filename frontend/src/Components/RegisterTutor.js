import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import GroupIcon from "@material-ui/icons/Group";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(7),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%"
  }
}));

export default function RegisterTutor() {
  const classes = useStyles();

  const [firstname, setFirstName] = React.useState("");
  const [lastname, setLastName] = React.useState("");
  const [primary_subject, setPrimSub] = React.useState("");

  const handleFirstNameChange = event => setFirstName(event.target.value);
  const handleLastNameChange = event => setLastName(event.target.value);
  const handlePrimSubChange = event => setPrimSub(event.target.value);

  const [message, setMessage] = React.useState("Nothing saved in the session");

  async function postTutor(toInput) {
    const response = await fetch("/api/tutor", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *client
      body: JSON.stringify(toInput) // body data type must match "Content-Type" header
    });

    let body = await response.json();
    console.log(body.id);
    setMessage(body.id ? "Data sucessfully updated" : "Data updation failed");
  }

  const handleSubmit = variables => {
    if(firstname !== "" && lastname !== ""){
      const toInput = {firstname, lastname, primary_subject};
      postTutor(toInput);
      setFirstName("");
      setLastName("");
      setPrimSub("");
    }
    else {
      setMessage("Please enter first and last name")
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <GroupIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register Tutor
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="firstName"
                autoComplete="First Name"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                value={firstname}
                label="First Name"
                onChange={handleFirstNameChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="lastName"
                autoComplete="Last Name"
                variant="outlined"
                required
                fullWidth
                id="lastName"
                value={lastname}
                label="Last Name"
                onChange={handleLastNameChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="primSub"
                autoComplete="Primary Subject"
                variant="outlined"
                required
                fullWidth
                id="primSub"
                value={primary_subject}
                label="Primary Subject"
                onChange={handlePrimSubChange}
              />
            </Grid>
          </Grid>
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            preventDefault
            className={classes.submit}
            onClick={handleSubmit}
          >
            Submit
          </Button>

          <Grid container justify="center">
            <Grid item>
            </Grid>
          </Grid>
        </form>
        <Typography style={{ margin: 7 }} variant="body1">
          Status: {message}
        </Typography>
        <Link className={classes.link} to="/">
          {" "}
          <Typography align="left">
            &#x2190; back
          </Typography>{" "}
        </Link>
      </div>
    </Container>
  );
}
