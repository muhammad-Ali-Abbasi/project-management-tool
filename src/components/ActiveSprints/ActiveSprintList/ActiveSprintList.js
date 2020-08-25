import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Drawer from "../../Drawer"
import CheckboxList from "./CheckboxList/checkBoxList"
import {deleteActiveSprint} from "../../../redux/Actions/ActiveSprintActions"
import {connect} from "react-redux"

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

  
const ActiveSprintssList = (props) => {
    const classes = useStyles();
    console.log(props.activeSprints)
    return ( 
        <> <Drawer  />
         <div className={classes.root }>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={12} lg={12} md={12} >
        <CheckboxList title="ActiveSprints" itemName="Fix front end log" count={props.activeSprints} deleteactiveSprint={props.deleteActiveSprint} />
        </Grid>
        </Grid>
        </div>
        </>
     );
}
 const mapStateToProps = state=>({
   activeSprints: state.activeSprints.currentactiveSprints
 })
 const mapDispatchToProps = dispatch =>({
  deleteActiveSprint: ActiveSprintId=>dispatch(deleteActiveSprint(ActiveSprintId))
})
export default connect(mapStateToProps,mapDispatchToProps)(ActiveSprintssList);