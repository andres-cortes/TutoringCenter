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
  link: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  linkGroup: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}));

export default function EmpHome() {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Employee Home
        </Typography>
        <div className={classes.linkGroup}>
          <Link className={classes.link} to="/RegisterStudent">
            {" "}
            <Typography align="left">
              Register New Student
            </Typography>{" "}
          </Link>
          <Link className={classes.link} to="/ViewStudents">
            {" "}
            <Typography align="left">
              View All Students
            </Typography>{" "}
          </Link>
        </div>
        <div className={classes.linkGroup}>
          <Link className={classes.link} to="/RegisterTutor">
            {" "}
            <Typography align="left">
              Register New Tutor
            </Typography>{" "}
          </Link>
          <Link className={classes.link} to="/ViewTutors">
            {" "}
            <Typography align="left">
              View All Tutors
            </Typography>{" "}
          </Link>
        </div>
      </div>
    </Container>
  );
}
