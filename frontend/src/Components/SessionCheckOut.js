import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

// COMPLETE SESSION CHECK OUT
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

  const [id, setID] = React.useState("");
  const [check_out, setTime] = React.useState("");

  const [data, upDateData] = React.useState([]);
  const [firstLoad, setLoad] = React.useState(true);
  let isLoading = true;

  //const handleTutorChange = event => setTutor(event.target.value);
  const handleIDChange = event => setID(event.target.value);
  const handleTimeChange = event => setTime(event.target.value);

  const [message, setMessage] = React.useState("");

  async function postSession(id, toInput) {
    const response = await fetch("/api/session/"+String(id), {
      method: "PUT", // GET, POST, *PUT, DELETE, etc.
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
  }

  const handleSubmit = variables => {
    if(id !== ""){
        let v = Date.now().toString();
        setTime(v);
        console.log(v);
        const toInput = {'check_out': Date.now().toString()};
        console.log(toInput)
        postSession(id, toInput);
        setID("");
    }
    else {
      setMessage("Please enter first and last name")
    }
  };

  return (
    <React.Fragment>
      <Title>Session Check Out</Title>
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
