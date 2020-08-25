import React  from 'react';

  import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import {connect} from 'react-redux'
  function Routes(props) {
    return (
  
      < header className="App-header dark-mode">
        <p>
         Welcome to Proje - your new project management tool.
        </p>
          <ul>
            <li>
              <Link to="/">Shop</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to={props.user?"/dashboard":"/signup"}>Dashboard</Link>
            </li>
          </ul>
  
          <hr />
  
          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          
        </ header>
  
    );
  }
  const mapStateToProps=state=>({
    user: state.Auth.user
  })
  export default connect(mapStateToProps)(Routes)