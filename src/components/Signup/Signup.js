import React, { useState } from 'react';
import DoubleArrowTwoToneIcon from '@material-ui/icons/DoubleArrowTwoTone';
import { makeStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux'
import Typography from '@material-ui/core/Typography';
import {Link,useHistory} from 'react-router-dom'
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import  "./Signup.css"
import {SignupHandler} from "../../redux/Actions/AuthAction"
import Card from "../Card"
import fire from "../../Firebase/Firebase-util"

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
const Signup = (props) => {
    const classes = useStyles();
    const history= useHistory()
    const [error,seterror] = useState(null)


    const onSignUp= async (event)=>{
      event.preventDefault()
      let email = document.getElementById('outlined-email-input').value
      let password = document.getElementById('outlined-password-input').value
      
      fire.auth().createUserWithEmailAndPassword(email,password).then((user)=>{
        props.signinhandle(user.xa)
        
        history.push('/dashboard')
        email = ""
        password = ""
      }).catch(e=>{
        console.log(e)
        seterror(e)
      })

    } 
    return (

      <div className="signup-container" > 
            <div className="signup-backbar">
                <Link  to="/"><DoubleArrowTwoToneIcon fontSize="large" color="primary"/> </Link>
                <Link className="signup-backbar-text" to="/"><Typography component="h3" varint="h3" color="white" >Back to home</Typography></Link>
            </div>
            <div className={classes.root}>
              <Card>
              <CardContent className={classes.content}>
          <Typography component="h3" variant="h3" color="primary">
            Signup
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Fill for fun
          </Typography>
          <form onSubmit={onSignUp}>
          {/* <TextField
          style={{marginTop:"10px",marginBottom:"8px"}}
          fullWidth
          required
          id="outlined-first-name-input"
          label="First Name"
          variant="outlined"
        />
        <TextField
          style={{marginTop:"10px",marginBottom:"8px"}}
          fullWidth
          required
          id="outlined-last-name-input"
          label="Last Name"
          variant="outlined"
        /> */}
          <TextField
          style={{marginTop:"10px",marginBottom:"8px"}}
          fullWidth
          required
          id="outlined-email-input"
          label="Email"
          variant="outlined"
        />
        <TextField
        style={{marginTop:"10px",marginBottom:"8px"}}
        fullWidth
        required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
        <span style={error?{display:"inline-block",color:"red"}:{display:"none"}} >{error?error.message:null}</span>
        <Button style={{marginTop:"10px"}} variant="contained" color="primary" type="submit" fullWidth>
     Signup
    </Button>
    </form >
    <Box style={{marginTop:"8px",marginBottom:"4px",width:"100%"}}>
    <hr style={{color:"black",height:"1px",width:"100%"}}  />
    </Box>
    <Typography style={{textDecoration:"none",fontWeight:"bold"}} variant="overline" color="textSecondary">Already have account?<Link to="/login"><Typography variant="overline" style={{fontWeight:"bold", textDecoration:"underline"}} color="textPrimary">Click here</Typography></Link></Typography>
        </CardContent>
              </Card>
              </div>
      </div>
     );
}
const mapStateToProps=state=>({

  user: state.Auth.user
})
const mapDispatchToProps = dispatch=>({

  signinhandle : (user)=>{dispatch(SignupHandler(user))}
  
})
export default connect(mapStateToProps,mapDispatchToProps)(Signup);
