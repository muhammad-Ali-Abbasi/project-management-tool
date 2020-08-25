import React, { useEffect } from 'react';
import {withRouter,useHistory} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import {connect} from 'react-redux'
const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    pos: {
      marginBottom: 12,
    },
  });
const ItemPage = (props) => {
    const classes = useStyles();
    let item=null
        item=props.backlogs.find(backlog=> backlog.id === props.match.params.itemid )
    console.log(item)
  const history= useHistory()
    return ( <>
    <Container maxWidth="md" style={{marginTop:"16px"}} >
    <Card className={classes.root}>
        <CardContent>
          <Typography  component="h2" variant="h2" color="primary" gutterBottom>
            Name: {item.backlogName?item.backlogName:"Empty"}
          </Typography>
          <br/>
          <Typography variant="subtitle1" component="subtitle1">
          Nature: {item.natures?item.natures:"no natures"}
          </Typography>
          <br/>
          <Typography variant="subtitle1" component="subtitle1">
          Start Date: {item.startDate?item.startDate:"no startdate"}
          </Typography>
          <br/>
          <Typography variant="subtitle1" component="subtitle1">
          End Date: {item.endDate?item.endDate:"no enddate"}
          </Typography>
          <br/>
          <Typography className={classes.pos} color="textSecondary">
            Tags: {item.tags? item.tags.map(tag=><Chip
          id={tag.id}
          label={tag.label}
          color="primary"
            />):"no tags"}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={()=>props.history.push(`${"/BacklogsList"}`)} color="primary" variant="contained">close</Button>
          <Button size="small" onClick={()=>{props.deletebacklog(item.id); history.push("/BacklogsList") }} color="secondary" variant="contained">Delete</Button>
        </CardActions>
      </Card>
    </Container>
    {isNaN( props.match.params.itemid)? props.history.push(`${"/BacklogsList"}`):null }</> );
}
const mapStateToProps = state=>({
    backlogs: state.backlogs.currentbacklogs
  })
export default   connect(mapStateToProps)(withRouter(ItemPage));