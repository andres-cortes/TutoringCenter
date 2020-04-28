import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  submit: {
    marginTop: 10
  }
});

export default function AddTutor() {
  const classes = useStyles();

  const [firstname, setFirstName] = React.useState("");
  const [lastname, setLastName] = React.useState("");
  const [primary_subject, setPrimSub] = React.useState("");

  const handleFirstNameChange = event => setFirstName(event.target.value);
  const handleLastNameChange = event => setLastName(event.target.value);
  const handlePrimSubChange = event => setPrimSub(event.target.value);

  const [message, setMessage] = React.useState("");

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
    window.location.reload(false);
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
    <React.Fragment>
      <Title>Add Tutor</Title>
      <form noValidate>
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
        {message}
      </Typography>
    </React.Fragment>
  );
}
