import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Drawer from "../Drawer"
import UsersList from "./UsersList/UsersList"
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import { CardHeader, IconButton, Button} from '@material-ui/core';
import Card  from '../Card'
import InputAdornment from '@material-ui/core/InputAdornment';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width:"80%",
      paddingTop:"130px",
      margin:"auto" 
    },
    paper: {
      padding: theme.spacing(2),
      overflow: "auto",
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const ActiveSprintsList = (props) => {
    const classes = useStyles();


    const [users,setusers]= useState([
        {
            id:1
            ,username:"alin jone",
            avatar:"user-1",
            active: true
    },
    {
        id:2
        ,username:"Wali Shan",
        avatar:"user-2",
        active: false,
        time: "2 hours"
    },
    {
        id:3
        ,username:"Dean joe",
        avatar:"user-3",
        active: true,
        time: "2 hours"
    },
    {
        id:4
        ,username:" Lainey Mcpherson",
        avatar:"user-4",
        active: false,
        time: "a minute "
    },
    {
        id:5
        ,username:"Abigail Wade",
        avatar:"user-5",
        active: false,
        time: "1 day "
    },
    {
        id:6
        ,username:"Nico Huerta",
        avatar:"user-6",
        active: true,
        time: "a minute ago"
    },
    {
        id:7,
        username:"Ryleigh Ali",
        avatar:"user-7",
        active: false,
        time: "yesterday"
    },
    {
        id:8,
        username:"Marissa Hutchinson",
        avatar:"user-8",
        active: true,
        time: "a minute ago"
    },
    {
        id:9,
        username:"Amy Mata",
        avatar:"user-9",
        active: false,
        time: "just now"
    },
    {
        id:10
        ,username:"Monica Salas",
        avatar:"user-10",
        active: true,
        time: "a minute ago"
    },
    ])
    let [adduser,setadduser]= useState(false)
    const [user,setuser]=useState('')
    const onchangename=(event)=>{
      const name = event.target.value
     setuser({
        id: new Date().getSeconds() , 
        username: name,
        avatar:`user-${Math.ceil(Math.random()*8)}`,
        active: `${Math.floor(Math.random()*1)}`,
        time: "a minute ago"})
    }
    const handleAddUser=()=>{
      let allusers = [...users]
      allusers.push(user)
      setusers(allusers)
      setuser('')
    }
    const handeldeleteitem = (event)=>{
        const id =  parseInt(event.target.parentNode.parentNode.parentNode.id)
        let allusers = [...users]
       const  Newusers =  allusers.filter(
            (deleteuser)=>{
                return  deleteuser.id !== id
            }
        ) 
        setusers(Newusers)
    }
    return ( 
        <> <Drawer  />
        <div className={classes.root }>
       <Grid container spacing={3}>
       <Grid item xs={12} sm={12} lg={12} md={12} >
       <Card>
    <CardHeader style={{display:"flex",alignItems:"center"}}
  title="Sprints"
  action={
    <IconButton onClick={()=>setadduser(!adduser)} >
      <PersonAddRoundedIcon/>
    </IconButton>
  }
/> 
<Divider/>
{adduser? <div style={{display:"flex",alignItems:"baseline",justifyContent:"flex-start",margin:"1rem"}}>
<TextField 
       style={{flexGrow:"1"}}
        id="username"
        label="Username"
        variant="outlined"
        onChange={onchangename}
        required
        value={user.username}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
      <input  accept="image/*" style={{display:"none"}} id="img" type="file" />
      <label htmlFor="img" style={{paddingLeft:".5rem"}}>
        <IconButton color="inherit" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
      <Button disabled={user ===''?true:false} onClick={handleAddUser} style={{marginLeft:"1rem"}} variant="contained" color="inherit">ADD</Button>
      </div>:null}
  <CardContent> 
          <UsersList users={users} handledelete={handeldeleteitem}/>
      </CardContent>
      </Card>
       </Grid>
       </Grid>
       </div>
       </>
    )}
 
export default  ActiveSprintsList;