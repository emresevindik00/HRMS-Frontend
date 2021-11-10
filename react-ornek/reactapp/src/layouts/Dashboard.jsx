import React from "react";
import JobList from "../pages/JobAdvertisement";
import "./MyStyle.css";
import Home from "../pages/Home";
import { Route } from "react-router-dom";
import JobDetail from "../pages/JobDetail";
import Employees from "../pages/Employees";
import SignIn from "../pages/SignIn";
import EmployeeRegister from "../pages/EmployeeRegister";
import Employers from "../pages/Employers";
import EmployerDetail from "../pages/EmployeeDetail";
import SetDetail from "../pages/SetDetail";
import JobPosting from "../pages/JobPosting";

export default function Dashboard() {
  
  return (
    <div className="primary">
      <Route exact path="/">
        <Home />
        <JobList />
      </Route>
      <Route exact path="/jobdetails" component={JobDetail}/>
      <Route exact path="/jobdetails/:id" component={JobDetail}/>
      <Route exact path="/employees" component={Employees}/>
      <Route exact path="/job-advertisement" component={JobList}/>
      <Route exact path="/sign-in" component={SignIn}/>
      <Route exact path="/register" component={EmployeeRegister}/>
      <Route exact path="/employer" component={Employers}/>
      <Route exact path="/employees/:id" component={EmployerDetail}/>
      <Route exact path="/employees/:id/setdetail" component={SetDetail}/>
      <Route exact path="/jobposting" component={JobPosting}/>
    </div>
  );
}
