import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import StudentCheckIn from "./Components/StudentCheckIn";
import TutorManagement from "./Components/TutorManagement";
import StudentManagement from "./Components/StudentManagement";
import Statistics from "./Components/Statistics"
import Dashboard from "./Components/Dashboard"

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/"component={StudentCheckIn} />
        <Route exact path="/EmployeeDashboard"component={Dashboard} />
        <Route exact path="/Tutor" component={TutorManagement} />
        <Route exact path="/Student" component={StudentManagement} />
        <Route exact path="/Statistics" component={Statistics} />
      </Router>
    );
  }
}

export default App;
