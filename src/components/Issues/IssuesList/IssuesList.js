import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Drawer from "../../Drawer"
import CheckboxList from "./CheckboxList/checkBoxList"
import {deleteIssue} from "../../../redux/Actions/issuesActions"
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

  
const IssuessList = (props) => {
    const classes = useStyles();
    console.log(props.issues)
    return ( 
        <> <Drawer  />
         <div className={classes.root }>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={12} lg={12} md={12} >
        <CheckboxList title="Issues" itemName="Fix front end log" count={props.issues} deleteissue={props.deleteIssue} />
        </Grid>
        </Grid>
        </div>
        </>

        
     );
}
 const mapStateToProps = state=>({
   issues: state.issues.currentissues
 })
 const mapDispatchToProps = dispatch =>({
  deleteIssue: IssueId=>dispatch(deleteIssue(IssueId))
})
export default connect(mapStateToProps,mapDispatchToProps)(IssuessList);