import React from "react"
import fire,{provider} from "../../Firebase/Firebase-util"
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux'
import {SignupHandler,setusername} from "../../redux/Actions/AuthAction"
import {useHistory} from 'react-router-dom'
 function  Facebooklogin(props){
    const history= useHistory()
    const facebookloginfun=()=>{
      fire.auth().signInWithPopup(provider).then(({user})=>{
            props.signinhandle(user.xa)
            props.setuser(user.displayName)
              history.push('/dashboard')
            console.log(user)
          })
    }
    return(
        <Button style={{marginTop:"16px"}} variant="contained" color="primary" type="submit" onClick={facebookloginfun}  fullWidth>
     login with facebook
        </Button>
    )
}
const mapDispatchToProps = dispatch=>({

    signinhandle : (user)=>{dispatch(SignupHandler(user))},
    setuser: (username)=>{dispatch(setusername(username))}
    
  })
  export default connect(null,mapDispatchToProps)(Facebooklogin)