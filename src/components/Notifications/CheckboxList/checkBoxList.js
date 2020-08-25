import React, { useEffect } from 'react';
import {Route} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import { CardHeader} from '@material-ui/core';
import {Link,withRouter } from "react-router-dom"
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import Card  from  "../../Card"
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
  return (
  <><Card>
    <CardHeader
  title={props.title}
/> 
<Divider/>
  <CardContent> 
  <List className={classes.root}>
      {count.map((value,index) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem key={value} role={undefined} dense button onClick={()=>{handleToggle(value); props.setforwardareadisable(false)}}>
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
          </ListItem>
        );
      })}
    </List>
      </CardContent>
    </Card>
    
    
  </>
  );
}

export default withRouter(CheckboxList)
