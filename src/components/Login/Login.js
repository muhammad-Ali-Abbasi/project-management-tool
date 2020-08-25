import React,{useState} from 'react';
import {connect} from 'react-redux'
import MediaCard from "./MediaCard/MediaCard"
import DoubleArrowTwoToneIcon from '@material-ui/icons/DoubleArrowTwoTone';
import Typography from '@material-ui/core/Typography';
import {Link,useHistory} from 'react-router-dom'
import {SignupHandler,setusername} from "../../redux/Actions/AuthAction"
import axios from 'axios'

import  "./Login.css"
import fire from "../../Firebase/Firebase-util"
const Login = (props) => {
  const history= useHistory()
  const [error,seterror] = useState(null)
  const onSignin= async (event)=>{
    
    event.preventDefault()
    let email = document.getElementById('login-email-input').value
    let password = document.getElementById('login-password-input').value
    fire.auth().signInWithEmailAndPassword(email,password).then(({user})=>{
      props.signinhandle(user.xa)
      props.setuser(user.email)
//       let data={email: email}
//      console.log(data)
// axios.post("/sendEmailNotification",data).then(response => response)
// .then(res => {
//   console.log('Success:', res);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });
        history.push('/dashboard')
      console.log(user)
      email = ""
      password = ""
    }).catch(e=>{
      console.log(e)
      seterror(e)
    })

  } 

    return ( 

      <div className="login-container" > 
            <div className="login-backbar">
                <Link  to="/"><DoubleArrowTwoToneIcon fontSize="large" color="primary"/> </Link>
                <Link className="login-backbar-text" to="/"><Typography component="h3" varint="h3" color="white" >Back to home</Typography></Link>
            </div>
              <MediaCard onSignin={onSignin} error={error} ></MediaCard>
      </div>
     );
}
 const mapStateToProps=state=>({

  user: state.Auth.user
})
const mapDispatchToProps = dispatch=>({

  signinhandle : (user)=>{dispatch(SignupHandler(user))},
  setuser: (username)=>{dispatch(setusername(username))}
  
})
export default connect(mapStateToProps,mapDispatchToProps)(Login);