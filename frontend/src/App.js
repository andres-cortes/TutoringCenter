import React, { Component } from "react";
import EmployeeHome from "./Components/EmployeeHome";
import RegisterStudent from "./Components/RegisterStudent";
import RegisterTutor from "./Components/RegisterTutor";
import ViewStudents from "./Components/ViewStudents";
import ViewTutors from "./Components/ViewTutors";
import { Route, BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/"component={EmployeeHome} />
        <Route exact path="/RegisterStudent" component={RegisterStudent} />
        <Route exact path="/RegisterTutor" component={RegisterTutor} />
        <Route exact path="/ViewStudents" component={ViewStudents} />
        <Route exact path="/ViewTutors" component={ViewTutors} />
      </Router>
    );
  }
}

export default App;
