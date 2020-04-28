import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function SessionTable() {
  const [data, upDateData] = React.useState([]);
  const [firstLoad, setLoad] = React.useState(true);
  let isLoading = true;

  async function fetchSession() {
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

  if (firstLoad) {
    fetchSession();
    setLoad(false);
  }

  if (data.length > 0) isLoading = false;

  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Waiting</Title>
      {isLoading ? (
        <CircularProgress />
      ) : (
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell align="center">Session ID</TableCell>
            <TableCell align="center">Student ID</TableCell>
            <TableCell align="center">Subject</TableCell>
            <TableCell align="center">Arrival</TableCell>
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
      )}
    </React.Fragment>
  );
}
