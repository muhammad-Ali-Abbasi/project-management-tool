import React from 'react';
import {Router,Switch,Route} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import LongMenu from "../../../popMenu"
import { CardHeader} from '@material-ui/core';
import {Link,withRouter } from "react-router-dom"
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import Card  from '../../../Card'
import ItemPage from '../../../ItemPage/ItemPage';

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
      props.setforwardareadisable(false)
    } else {
      newChecked.splice(currentIndex, 1);
    }
    props.setforwardareadisable(false)

    setChecked(newChecked);
    
  };
const count = props.count
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
      {count.map((value,index) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem key={value} role={undefined} dense button onClick={()=>handleToggle(value) }>
            <ListItemIcon >
              <Checkbox
                edge="start"
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={value.value?value.value: index+1`item ` } />
            <ListItemSecondaryAction>
              {props.children?<Link to={`${props.match.path}/${index+1}`}><IconButton edge="end" aria-label={props.label}>
                {props.children}
              </IconButton></Link>:null}
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
      </CardContent>
    </Card>
    
  <Route exact path={`${props.match.path}/:itemid`} component={ItemPage}/>
    
  </>
  );
}

export default withRouter(CheckboxList)
