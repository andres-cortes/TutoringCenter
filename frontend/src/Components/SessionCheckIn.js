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

export default function SessionCheckIn() {
  const classes = useStyles();

  const [tutor_id, setTutor] = React.useState("");
  const [id, setID] = React.useState("");
  const [check_in, setTime] = React.useState("");

  const [data, upDateData] = React.useState([]);
  const [firstLoad, setLoad] = React.useState(true);
  let isLoading = true;

  const handleTutorChange = event => setTutor(event.target.value);
  const handleIDChange = event => setID(event.target.value);
  const handleTimeChange = event => setTime(event.target.value);

  const [message, setMessage] = React.useState("");

  async function postSession(id, toInput) {
    const response = await fetch("/api/session/"+id, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
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
    if(tutor_id !== "" && id !== ""){

      let d = new Date(Date.now())
      console.log(d)
      setTime(Date.now())

      const toInput = {tutor_id, 'check_in':Date.now().toString()};
      postSession(id, toInput);
      setTutor("");
      setID("");
    }
    else {
      setMessage("Please enter first and last name")
    }
  };

  return (
    <React.Fragment>
      <Title>Session Check In</Title>
      <form noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
          <TextField
              name="Session ID"
              autoComplete="Session ID"
              variant="outlined"
              required
              fullWidth
              id="Session ID"
              value={id}
              label="Session ID"
              onChange={handleIDChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
              name="Tutor ID"
              autoComplete="Tutor ID"
              variant="outlined"
              required
              fullWidth
              id="Tutor ID"
              value={tutor_id}
              label="Tutor ID"
              onChange={handleTutorChange}
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
      </form>
      <Typography style={{ margin: 7 }} variant="body1">
        {message}
      </Typography>
    </React.Fragment>
  );
}
