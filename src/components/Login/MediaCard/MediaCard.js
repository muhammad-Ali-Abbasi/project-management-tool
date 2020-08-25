import React,{useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import Facebooklogin from "../Facebooklogin"
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width:"100%",
    height:"100%"
  },
  content: {
    display:'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent:'space-between'
  },
  cover: {
    width: "50%",
    
  },
}));

export default function MediaControlCard(props) {
  const classes = useStyles();
  const theme = useTheme();
  
  return (
    <Card className={classes.root}>
        <CardContent className={classes.content}>
          <Typography component="h3" variant="h3" color="primary">
            Login
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Enter username and password
          </Typography>
          <form onSubmit={props.onSignin} >
          <TextField
          style={{marginTop:"16px",marginBottom:"8px"}}
          fullWidth
          required
          id="login-email-input"
          label="Username"
          variant="outlined"
        />
        <TextField
        style={{marginTop:"16px",marginBottom:"8px"}}
        fullWidth
        required
          id="login-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
    <span style={props.error?{display:"inline",color:"red"}:{display:"none"}} >{props.error?`${props.error.code=="auth/wrong-password"?"password is incorrect":"email is not registered please signup"}`:null}</span>
        <Button style={{marginTop:"16px"}} variant="contained" color="primary" type="submit" fullWidth>
     Login
    </Button>
    </form>
    <Facebooklogin/>
    <Box style={{marginTop:"2px",marginBottom:"1px",width:"100%"}}>
    <hr style={{color:"black",height:"1px",width:"100%"}}  />
    </Box>
    <Typography variant="overline" color="textSecondary">Don't have an account? <Link to="/signup" style={{paddingBottom:"8px"}} ><Typography variant="overline" style={{fontWeight:"bolder", textDecoration:"underline"}} color="textPrimary">Sign Up here</Typography></Link></Typography>
        </CardContent>
        
      <CardMedia
      style={{position:"relative",width:"100%",height:"100%"}}
        
        image="/assets/img/office.jpg"
        title="Live from space album cover"
      ><div  style={{background:"rgba(63,81,181,0.5)",position:"absolute",width:"100%",height:"100%"}}></div>
          {/* <Typography component="p" variant="subtitle1" color="inherit">Hella narvwhal Cosby sweater McSweeney's, salvia kitsch before they.</Typography>
          <Box style={{display:"flex",alignItems:"center",marginTop:"2.4rem"}}>
          <Avatar alt="Cindy Baker" src="./assets/img/profile.jpg" />
              <Box>
              <Typography component="p" variant="subtitle2" color="error">Ekaterina Tankova</Typography>
              <Typography component="p" variant="subtitle2">Manager at inVision</Typography>
              </Box>
          </Box> */}
      </CardMedia>
      
    </Card>
  );
}
