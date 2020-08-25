import React, { useEffect, useState } from 'react';
import './App.scss';
import { Switch, Route, Redirect,useHistory } from "react-router-dom";
import {ThemeProvider,createMuiTheme} from '@material-ui/core'
//comps

import Dashboard from './components/Dashboard/Dashboard';
import Home from "./Layouts/HomePage/HomePage"
import About from "./Layouts/About/About"
import UserProfile  from "./components/UserProfile/UserProfile"
import Users  from "./components/Users/Users"
import  Notifications from "./components/Notifications/Notifications"
import Projects from "./components/Projects/Projects"
import Sprints from "./components/Sprints/Sprints"
import ActiveSprintList from "./components/ActiveSprints/ActiveSprintList/ActiveSprintList"
import ActiveSprintCreate from "./components/ActiveSprints/ActiveSprintCreate/ActiveSprintCreate"
import BacklogsCreate from "./components/Backlogs/BacklogCreate/BacklogsCreate"
import BacklogsList from "./components/Backlogs/BacklogList/BacklogsList"
import IssuesList from "./components/Issues/IssuesList/IssuesList"
import IssuesCreate from "./components/Issues/IssuesCreate/IssuesCreate"
import Velocity from './components/Velocity/Velocity';
import ManageBoard from './components/Board/Board';
import Login from "./components/Login/Login"
import Signup from "./components/Signup/Signup"
import Calendar from "./components/Calendar/Calendar"
import GanttChart from './components/GanttChart/GanttChart';
import $ from "jquery"
import {connect} from 'react-redux'
import {toggleDarkmode} from "./redux/Actions/DarkmodeAction"
import {SignupHandler} from "./redux/Actions/AuthAction"
import fire from "./Firebase/Firebase-util.js"

  

function App(props) {

  const theme = createMuiTheme({
      palette:{
      type: props.darkmode? 'dark':'light',
      primary:{
        main:"#008b8b"
      }
    }

  })
  
  // const darkmodehandler=(setdarkMode,darkMode)=>{
  //   const calendar = $('.react-calendar')
  //   const GanttChart = $('#reactgooglegraph-1')
  //   if (!darkMode) {
  //   calendar.removeClass('calendardarkmode')
  //   GanttChart.removeClass('ganttchartdarkmode')
  //   }
  //   if (darkMode) {
  //     calendar.addClass('calendardarkmode')
  //     GanttChart.addClass('ganttchartdarkmode')
  //   }
  // }
  const authListner=()=>{
    fire.auth().onAuthStateChanged(user=>{
      if(user){
        props.signinhandle(user.xa)
      console.log("app auth function")
      }
    })
  }

  useEffect(
    ()=>{
      localStorage.setItem('darkmode', JSON.stringify(props.darkmode))
      console.log("app componentdidupdate")
    },[props.darkmode])
  useEffect(()=>{
    authListner()
        console.log("app componentdidmount")
  },[])


  return (
    <>
    <ThemeProvider theme={theme}>
        <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/About">
              <About  />
        </Route>
<Route path="/signup"render={()=>!props.user?(<Signup/>):(<Redirect to={"/dashboard"} />)}/>
<Route path="/Login"render={()=>!props.user?(<Login/>):(<Redirect to={"/dashboard"} />)}/>
<Route path="/dashboard" render={()=>props.user?(<Dashboard/>):(<Redirect to={"/Login"} />)} />
<Route path="/UserProfile" render={()=>props.user?(<UserProfile/>):(<Redirect to={"/Login"} />)} />
<Route path="/Users" render={()=>props.user?(<Users/>):(<Redirect to={"/Login"} />)} />
<Route path="/Notifications" render={()=>props.user?(<Notifications/>):(<Redirect to={"/Login"} />)} />
<Route path="/Projects" render={()=>props.user?(<Projects/>):(<Redirect to={"/Login"} />)} />
<Route path="/sprints" render={()=>props.user?(<Sprints/>):(<Redirect to={"/Login"} />)} />
<Route path="/ActiveSprintCreate" render={()=>props.user?(<ActiveSprintCreate/>):(<Redirect to={"/Login"} />)} />
<Route path="/ActiveSprintList" render={()=>props.user?(<ActiveSprintList/>):(<Redirect to={"/Login"} />)} />
<Route path="/BacklogsCreate" render={()=>props.user?(<BacklogsCreate/>):(<Redirect to={"/Login"} />)} />
<Route path="/BacklogsList" render={()=>props.user?(<BacklogsList/>):(<Redirect to={"/Login"} />)} />
<Route path="/IssuesCreate" render={()=>props.user?(<IssuesCreate/>):(<Redirect to={"/Login"} />)} />
<Route path="/IssuesList" render={()=>props.user?(<IssuesList/>):(<Redirect to={"/Login"} />)} />
<Route path="/velocity" render={()=>props.user?(<Velocity/>):(<Redirect to={"/Login"} />)} />
<Route path="/board" render={()=>props.user?(<ManageBoard/>):(<Redirect to={"/Login"} />)} />
<Route path="/calendar" render={()=>props.user?(<Calendar/>):(<Redirect to={"/Login"} />)} />
<Route path="/timeline" render={()=>props.user?(<GanttChart/>):(<Redirect to={"/Login"} />)} />
          </Switch>
    </ThemeProvider>
    </>
  );
}

const mapStateToProps=state=>({
  darkmode: state.darkmode.darkmode,
  user: state.Auth.user
})
const mapDispatchToProps = dispatch=>({
  toggleDarkmode: (darkmode)=>{dispatch(toggleDarkmode(darkmode))},
  signinhandle : (user)=>{dispatch(SignupHandler(user))}
  
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
