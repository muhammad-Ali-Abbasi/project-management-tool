import React,{Component} from 'react';
import Drawer from "../Drawer"
import {withRouter} from "react-router-dom"
import Fluidcontainer from "./FluidContainer/FluidContainer"
import TabMenu from "./TabMenu/TabMenu"
//css classes
import "./UserProfile.css"
//material ui components
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {connect} from "react-redux"

class UserProfile extends Component{
    render(){     
    return ( 
        <>
        <Drawer />
        <div className="profile-container">
                <div className="profile-cover"></div>
                <Fluidcontainer maxWidth="lg">
                    <Box className="profile-bar">
                    <div className="profile" style={{backgroundImage:"url(/assets/img/user-2.jpg)"}}></div>
                        <Box className="profile-bar-name">
                            <Typography component="span" variant="overline" color="textSecondary">Sales Manager</Typography>
    <Typography component="h4" color="textPrimary">{this.props.username}</Typography>
                        </Box>
                        <div className="profile-bar-extra"></div>
                        <Button variant="contained" color="primary" >Send a notification</Button>
                    </Box>
                    <Fluidcontainer maxWidth="lg">
                        <Box className="profile-tab-menu-box">
                            <TabMenu></TabMenu>
                            
                        </Box>
                    </Fluidcontainer>
                </Fluidcontainer>
        </div>
        </>
        
     );}
}
const mapStateToProps=state=>({

    username: state.Auth.userName
  })
  export default connect(mapStateToProps)(withRouter(UserProfile))