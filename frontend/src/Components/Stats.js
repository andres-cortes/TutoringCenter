import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import GroupIcon from "@material-ui/icons/Group";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import LineGraph from "./myLineGraph"


const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 600
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: `10px`,
    height: "100%",
    width: "99%",
    marginTop: theme.spacing(7)
  },
  link: {
    color: "rgba(0,0,0,0.65)",
    textDecoration: "none",
    marginLeft: "10%",
    alignSelf: "flex-start",
    "&:hover": {
      color: "rgba(0,0,0,1)"
    }
  }
}));

export default function SimpleGraph() {
  const classes = useStyles();

  const [data, upDateData] = React.useState([]);
  const [arriveLabels, updateLabels] = React.useState([]);
  const [pData, updateP] = React.useState([]);
  const [firstLoad, setLoad] = React.useState(true);
  let isLoading = true;

  async function sampleFunc() {
    let response = await fetch("/api/session");
    let body = await response.json();
    var aData = []
    var aLabel = []
    var pData = []
    aData['12 AM'] = 0
    aLabel[0] = '12 AM'
    pData[0] = 0
    for (let step = 1; step < 24; step++){
        pData[step] = 0
        if (step < 12){
            aLabel[step] = String(step)+' AM'
        }
        else if (step == 12){
            aLabel[step] = '12 PM'
        }
        else if (12 < step){
            aLabel[step] = String(step-12)+' PM'
        }
    }
    let step = 0
    for(var key in body){
        let student = new Date(Date.parse(body[key]['student_arrive']))
        let f = student.getHours()
        pData[f]++;
    }

    for (step = 0; step < pData.length && pData[step+1] == 0; step++){
            pData.shift(0)
            aLabel.shift(0)
            step--
    }

    for(step = pData.length; pData.length > 0 && pData[step-2] == 0; step--){
        pData.pop()
        aLabel.pop()
        step--
    }


    updateLabels(aLabel)
    updateP(pData)
    upDateData(body);
  }

  if (firstLoad) {
    sampleFunc();
    setLoad(false);
  }

  if (data.length > 0) isLoading = false;

  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <GroupIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Center Stastics
      </Typography>

      {isLoading ? (
        <CircularProgress />
      ) : (
        <div class="LineGraph_graphContainer__2g04_">
            <LineGraph
            title = {"Number of Students each hour"}
            data = {Array.from(pData)}
            labels = {Array.from(arriveLabels)}
        />
        </div>
      )}
      <Link className={classes.link} to="/">
        {" "}
        <Typography align="left">
          &#x2190; back
        </Typography>{" "}
      </Link>
    </div>
  );
}
