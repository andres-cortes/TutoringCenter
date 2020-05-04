import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import LineGraph from "./myLineGraph"


const useStyles = makeStyles(theme => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    
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
    </div>
  );
}
