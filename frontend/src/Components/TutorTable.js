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

export default function TutorTable() {
  const [data, upDateData] = React.useState([]);
  const [firstLoad, setLoad] = React.useState(true);
  let isLoading = true;

  async function fetchTutor() {
    let response = await fetch("/api/tutor");
    let body = await response.json();
    upDateData(body);
  }

  if (firstLoad) {
    fetchTutor();
    setLoad(false);
  }

  if (data.length > 0) isLoading = false;

  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Tutors</Title>
      {isLoading ? (
        <CircularProgress />
      ) : (
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">First Name</TableCell>
            <TableCell align="center">Last Name</TableCell>
            <TableCell align="center">Primary Subject</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map(row => (
            <TableRow key={row.name}>
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center">{row.firstname}</TableCell>
              <TableCell align="center">{row.lastname}</TableCell>
              <TableCell align="center">{row.primary_subject}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      )}
    </React.Fragment>
  );
}
