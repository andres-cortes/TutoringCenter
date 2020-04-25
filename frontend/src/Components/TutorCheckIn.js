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
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";

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

export default function StudentCheckIn() {
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

  const [message, setMessage] = React.useState("Nothing saved in the session");

  async function postSession(id, toInput) {
    const response = await fetch("/api/session"+"/"+id, {
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
    setMessage(body.id ? "Data sucessfully updated" : "Data updation failed");
  }
  

  
    async function sampleFunc() {
      let response = await fetch("/api/session");
      let body = await response.json();
      //remove the students who have already been seen by a tutor
      for (var key in body){
          if (body[key]['check_in'] != null){
              delete body[key];
          }
          else{
            body[key]['student_arrive'] = new Date(Date.parse(body[key]['student_arrive'])).toLocaleTimeString();
          }
      }
      for (var key in body)
      {
          console.log(body[key])
      }
      upDateData(body);
    }

  const handleSubmit = variables => {
    if(tutor_id !== "" && id !== ""){

      let d = new Date(Date.now())
      console.log(d)
      setTime(Date.now())

      const toInput = {tutor_id, check_in};
      postSession(id, toInput);
      setTutor("");
      setID("");
    }
    else {
      setMessage("Please enter first and last name")
    }
  };

  if (firstLoad) {
    sampleFunc();
    setLoad(false);
  }

  if (data.length > 0) isLoading = false;

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <GroupIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Tutor Check-in
        </Typography>
        <form className={classes.form} noValidate>
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

        {isLoading ? (
        <CircularProgress />
        ) : (
        <TableContainer
          style={{ width: "100%", margin: "0 0px" }}
          component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Session ID</TableCell>
                <TableCell align="center">Student ID</TableCell>
                <TableCell align="center">Subject</TableCell>
                <TableCell align="center">Arrival Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map(row => (
                <TableRow key={row.name}>
                  <TableCell align="center">{row.id}</TableCell>
                  <TableCell align="center">{row.student_id}</TableCell>
                  <TableCell align="center">{row.subject}</TableCell>
                  <TableCell align="center">{row.student_arrive}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      
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