import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Drawer from "../../Drawer"
import FluidContainer from "./FluidContainer/FluidContainer"
import { makeStyles } from '@material-ui/core/styles';
import Papers from "../../Paper"
import MuiGrid from "../../MuiGrid"
import VerticalStepper from "./VerticalStepper/VerticalStepper"
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import Add from '@material-ui/icons/Add';
import Editor from "../../Editor"
import {Link} from "react-router-dom"
import Radio from '@material-ui/core/Radio';
import {connect} from 'react-redux'
import {setActiveSprint} from '../../../redux/Actions/ActiveSprintActions'
const useStyles = makeStyles((theme) => ({
  backButton: {
    marginRight: theme.spacing(1),
  },
  ChiprRoot: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
    backgroundColor:"inherit"
  },
  chip: {
      border: "1px solid #9e9e9e",
      backgroundColor: "transparent",
    margin: theme.spacing(0.5),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  }
}));



function getSteps() {
  return ['Select master activeSprint settings', 'Create an activeSprint group', 'Description of  activeSprint'];
}



const ActiveSprintsCreate  = (props) => {
  const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [selectedValue, setSelectedValue] = React.useState();
    const [natures,setnatures]=useState("")
    const [activeSprintName,setactiveSprintName]=useState("")
    const [startDate,setstartDate]=useState("")
    const [endDate,setendDate]=useState("")
    const [description,setDescription]=useState("")
    const [tags,setTags]=useState([{
      label: "activeSprint" ,
      value: "activeSprint" ,
      id: "9876"
    },{
      label: "activeSprint" ,
      value: "activeSprint" ,
      id: "9dfg876"
    }])
    const [tag,settag]=useState('')
    const newActiveSprint={
      id: new Date().getTime().toString() ,
      selectedValue,
      natures,
      activeSprintName,
      startDate,
      endDate,
      tags,
      description
    }
  const handleChange = (event) => {
    const value = event.target.value
    setSelectedValue(value);
    console.log(value)
    setnatures(value)
  };
  const steps = getSteps();
 
  const handleDelete = (id) =>()=> {
    let newarray = [...tags]
   const updatedArray = newarray.filter((chip) => chip.id !== id)
    setTags(updatedArray)
    console.log("from delete"+newarray.map((tag)=>tag.label))
  };
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  
  const submitform = (e) => {
    e.preventDefault()
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    props.setActiveSprint(newActiveSprint)

  };
  const onchangactiveSprintnameHandler=()=>{
    let activeSprintname = document.getElementById('setactiveSprintName').value
    setactiveSprintName(activeSprintname)
    console.log(activeSprintName)
  }
  const onchangstartdateHandler=()=>{
    let startdate = document.getElementById('setstartDate').value
    setstartDate(startdate)
    console.log(startDate)
  }
  const onchangenddateHandler=()=>{
    let enddate = document.getElementById('setendDate').value
    setendDate(enddate)
    console.log(endDate)
  }

  const handletags =()=>{
    setTags([...tags,tag])
    document.getElementById('setTags').value = ''
    settag('')
 }
 const onchgangetag = e=>{
   const element = e.target
   settag({
     label: element.value ,
     value: element.value ,
     id: new Date().getTime().toString()
   }) 
 }


const radioArray=[{name:"minor",value:"minor"},{name:"major",value:"major"},{name:"huge",value:"huge"}].map((nature)=>{
  return <Box style={{marginTop:"26px"}}>
                        
                        <Papers elevation={1} rounded >
                        <div style={{display:"flex", alignItems:"flex-start",marginBottom:"16px",padding:"16"}}>
                        <Radio
                         checked={selectedValue === nature.value}
                        onChange={handleChange}
                        value={nature.value}
                         name="settags"
                           inputProps={{ 'aria-label': nature.value.toUpperCase() }}
                            />
                            <Box style={{marginLeft:"16px",display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
                            <Typography component="h5" variant="h5" color="textPrimary" gutterBottom>
                            {nature.name}
                            </Typography>
                            </Box>
                            </div>
                        </Papers>
                        
                    </Box>})
    return (

        <>
        <Drawer/>
        <FluidContainer>
        <Papers elevation={3}>
        <MuiGrid>
            <Grid item md={3} xs={12}>
                <VerticalStepper steps={steps} activeStep={activeStep} name="activeSprint" />
            </Grid>
            <Grid item md={9} xs={12}>
            <div style={{width:"80%",margin:"auto", display:"flex",flexDirection:"column", justifyContent:"flex-start"}}>
            <Box>
                <form onSubmit={submitform} >
                    <Box style={{display:"flex",flexDirection:"column", alignItems:"flex-start" ,marginBottom:"16px"}}>
                    <Typography component="h3" color="textPrimary" style={{marginTop:"16px"}}>
                    Please select one option
                    </Typography>
                        <Typography component="h6" variant="subtitle1" color="textSecondary" style={activeStep === 0?{display: "block"}:{display:"none"},{marginTop:"16px"}}>
                        select the Nature of activeSprint
                        </Typography>
                        </Box>
                        
                    <div style={activeStep === 0?{display: "block"}:{display:"none"}} >{radioArray}</div>
                    
                    <Box style={activeStep === 1?{display: "block"}:{display:"none"}}>
                <input style={{width:"80%",border:"1px solid black",outline:"none",padding:"10px",borderRadius:"12px"}} placeholder="activeSprint Name" onChange={onchangactiveSprintnameHandler}    name="setactiveSprintName" id="setactiveSprintName" label="ActiveSprint Name" variant="outlined" fullWidth="100%" ></input>
                <Box style={{marginTop:"26px",display:"flex",alignItems:"center"}}>
                <input type="text" placeholder="Tags" style={{width:"80%",border:"1px solid black",outline:"none",padding:"10px",borderRadius:"12px"}} onChange={onchgangetag}  id="setTags" label="Tags"  variant="outlined" fullWidth="100%"></input>
                <Box style={tag === '' ?{display: "none"}:{display:"block"}} >
                <IconButton onClick={handletags}  style={{marginLeft:"16px"}}>
                    <Add/>
                </IconButton>
                </Box>
                </Box>
                <Box>
                <ul   className={classes.ChiprRoot}>
      {tags.map((data) => { 

        return (
          <li key={data.id}>
            <Chip
              label={data.value}
              onDelete={handleDelete(data.id)}
              className={classes.chip}
            />
          </li>
        );
      })}
    </ul>
                <Box  style={{display:"flex",marginTop:"16px"}}>
                <div style={{display:"flex",alignItems:"baseLine"}}><label>Start-Date:</label><input style={{border:"1px solid black",padding:"5px"}} onChange={onchangstartdateHandler}
    id="setstartDate"
    label="Start-Date"
    type="date"
    name="setstartDate"
    defaultValue="2017-05-24"
    className={classes.textField}
  /></div>
                
                <div style={{display:"flex",alignItems:"baseLine"}}><label>End-Date:</label><input style={{border:"1px solid black",padding:"5px"}} onChange={onchangenddateHandler}
    id="setendDate"
    label="End-Date"
    type="date"
    name="setendDate"
    defaultValue="2020-05-24"
    className={classes.textField}
  /></div>
                  
                  </Box>
                </Box>
                </Box>
                
                <Box style={activeStep === 2?{display: "block"}:{display:"none"}} >
                  <Editor checkmode={props.checkmode}  editorsetstart={setDescription} setdarkMode={props.setdarkMode} darkMode={props.darkMode} />
                </Box>
                
                <Box style={activeStep === steps.length?{display: "block"}:{display:"none"}} >
                  <Typography component="h2" variant="h2" color="primary">Your ActiveSprint is created! </Typography>
                </Box>
                    <Grid container spacing={2} style={{marginTop:"16px"}}>
                    <Grid item lg={6} sm={12}>
                    <Button
                style={activeStep === 0 || activeStep >= 2 ?{display:"none"}:null}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              </Grid >
              <Grid item lg={6} sm={12}>
                
                <Link to="/ActiveSprintList"><Button variant="contained" color="primary"  style={activeStep === steps.length ?{display:"block"}:{display:"none"}} > 
                View ActiveSprints
              </Button></Link>
              <Button variant="contained" color="primary" onClick={handleNext}   style={activeStep >= 2 ?{display:"none"}:{display:"block"}} > 
                Next
              </Button>
              
              <Button variant="contained" color="primary" type="submit"    style={activeStep === steps.length - 1 ?{display:"block"}:{display:"none"}} > 
                finish
              </Button>
              </Grid>
              </Grid>
                
                </form>
                
            </Box>
            </div>
            </Grid>
            
        </MuiGrid>
        </Papers>
        </FluidContainer>
        </>
     );
}

const mapDispatchToProps = dispatch =>({
  setActiveSprint: ActiveSprint=>dispatch(setActiveSprint(ActiveSprint))
})

export default connect(null,mapDispatchToProps)(ActiveSprintsCreate) 