import React,{useEffect} from 'react';
import IconButton from '@material-ui/core/IconButton';
import GroupIcon from '@material-ui/icons/Group';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { WbSunnyRounded } from '@material-ui/icons';
import { NightsStayRounded } from '@material-ui/icons';
import Badge from '@material-ui/core/Badge';
import {connect} from "react-redux"
import  "./RightNavGroup.css";
import {Link,useHistory} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import {toggleDarkmode} from "../../../redux/Actions/DarkmodeAction"
import {deleteuser,deleteusername} from "../../../redux/Actions/AuthAction"
import fire from "../../../Firebase/Firebase-util"
const RightNavGroup = (props) => {
  const history= useHistory()
  const logout = ()=>{
    fire.auth().signOut()
    props.deleteuser()
    props.deleteusername()
     history.push('/login')
    
  }
    return ( 
        <div className="rightNavGroup">
          <Link className="link-color" to="/users">
            <IconButton
           color="inherit"
            aria-label="icon"
            edge="start"
            
          >
              <Badge badgeContent={11} color="secondary">
              <GroupIcon style={{ fontSize:  "120%" }}/>
              </Badge>
            
          </IconButton>
          </Link>
          <Link className="link-color" to="/notifications">
          <IconButton
            color="inherit"
            aria-label="icon"
            edge="start"
            
          >
              <Badge badgeContent={4} color="secondary">
              <NotificationsIcon style={{ fontSize:  "120%" }}/>
          </Badge>
            
          </IconButton>
          </Link>
          <Link className="link-color" to="/userProfile">
          <IconButton
            color="inherit"
            aria-label="icon"
            edge="start"
            >
              <AccountCircleIcon style={{ fontSize:  "120%" }}/> 
          </IconButton>
          </Link>
          <IconButton
            color="inherit"
            aria-label="icon"
            edge="start"
            onClick={()=>{props.toggleDarkmode(props.darkmode)}}
            >
              {props.darkmode? <NightsStayRounded style={{ fontSize:  "120%" }} />
              :<WbSunnyRounded style={{ fontSize:  "120%" }}/> }
          </IconButton>
          <Button variant="contained" color="secondary" onClick={logout}>
        Logout
      </Button>
        </div>
     );
}
const mapStateToProps=state=>({
  darkmode: state.darkmode.darkmode
})
const mapDispatchToProps = dispatch=>({
  toggleDarkmode: (darkmode)=>{dispatch(toggleDarkmode(darkmode))},
  deleteuser: ()=>{dispatch(deleteuser())},
  deleteusername: ()=>{dispatch(deleteusername())}
})
export default connect(mapStateToProps,mapDispatchToProps)(RightNavGroup);