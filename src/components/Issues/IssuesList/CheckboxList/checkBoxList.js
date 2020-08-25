import React from 'react';
import {Route,useHistory} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import BugReport from '@material-ui/icons/BugReport';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import LongMenu from "../../../popMenu"
import { CardHeader} from '@material-ui/core';
import {Link,withRouter } from "react-router-dom"
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import Card  from '../../../Card'
import ItemPage from '../ItemPage/ItemPage';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));
function CheckboxList(props) {

  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);
// const currentpath = useHistory()
console.log(checked)
  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);

    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    
  };
const count = props.count
const history = useHistory()
  return (
  <><Card>
    <CardHeader
  action={
    <LongMenu/>
  }
  title={props.title}
/> 
<Divider/>
  <CardContent> 
  <List className={classes.root}>
      {count.map((item,index) => {
        const labelId = `checkbox-list-label-${item}`;

        return (
          <ListItem key={item.id} role={undefined} dense button onClick={()=>handleToggle(item) }>
            <ListItemIcon >
              <Checkbox
                edge="start"
                checked={checked.indexOf(item) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={item.issueName?item.issueName:"Empty"} />
            <ListItemSecondaryAction>
            <IconButton onClick={()=>{props.deleteissue(item.id); history.push("/IssuesList")}} style={checked.indexOf(item) !== -1 ? {display:"inline"} :{display:"none"} } edge="start">
              <DeleteIcon/>
              </IconButton>
              <Link to={`${props.match.path}/${item.id}`}>
                <IconButton  edge="end" aria-label={props.label}>
                  <BugReport/>
              </IconButton></Link>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
      </CardContent>
    </Card>
    
  <Route exact path={`${props.match.path}/:itemid`} ><ItemPage deleteissue={props.deleteissue}/></Route>
  </>
  );
}

export default withRouter(CheckboxList)
