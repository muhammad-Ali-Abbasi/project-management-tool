import React from 'react';
import {Link} from "react-router-dom"
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BugReport from '@material-ui/icons/BugReport';
import Toc from '@material-ui/icons/Toc';
import ViewList from '@material-ui/icons/ViewList';
import Dashboard from '@material-ui/icons/Dashboard';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import ListAltIcon from '@material-ui/icons/ListAlt';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
//comps
import Menu from './Menu';
import RightNavGroup from './Dashboard/RightNavGroup/RightNavGroup';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor: 'darkcyan',//doesnt accept HEX vals
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  leftNavGroup:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center'
  }
}));

export default function MiniDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openlist1, setOpenlist1] = React.useState(false);
  const [openlist2, setOpenlist2] = React.useState(false);
  const [openlist3, setOpenlist3] = React.useState(false);
 

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar style={{display:'flex',justifyContent:'space-between'}}>
          <div class={classes.leftNavGroup}><IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Proje - Dashboard
          </Typography></div>
          <RightNavGroup />
        </Toolbar>
        <Menu />
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
        <Link style={{textDecoration:"none",color:"inherit"}} to="/">
        <ListItem button key={0}>
              <ListItemText primary={'Main'} />
            </ListItem>
            </Link>
            <Link to="/dashboard">
           <ListItem button key={0}>
              <ListItemIcon> <Dashboard /> </ListItemIcon>
              <ListItemText primary={'Dashboard'} />
            </ListItem>
            </Link>
            <Link to="/sprints">
            <ListItem button key={1}>
              <ListItemIcon> <ListAltIcon /> </ListItemIcon>
              <ListItemText primary={'Sprints'} />
            </ListItem>
            </Link>
            <ListItem button key={0}>
              <ListItemText primary={'Users'} />
            </ListItem>
            <ListItem  button key={2} onClick={()=>setOpenlist1(!openlist1)}>
            <ListItemIcon> <AddToQueueIcon /> </ListItemIcon>
            <ListItemText primary={'Backlogs'} />
        {openlist1 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openlist1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link to="BacklogsList">
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            <AddToQueueIcon />
            </ListItemIcon>
            <ListItemText primary="Backlogs" />
          </ListItem>
          </Link>
          <Link to="BacklogsCreate">
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            <AddToQueueIcon />
            </ListItemIcon>
            <ListItemText primary="Create backlog" />
          </ListItem>
          </Link>
        </List>
      </Collapse>
            <Link to="/Projects">
            <ListItem button key={1}>
              <ListItemIcon> <ViewList /> </ListItemIcon>
              <ListItemText primary={'Projects'} />
            </ListItem>
            </Link>
        </List>
        <Divider />
        <List>
            <ListItem button key={0}>
              <ListItemText primary={'Users'} />
            </ListItem>
            <ListItem  button key={2} onClick={()=>setOpenlist2(!openlist2)}>
            <ListItemIcon> <Toc /> </ListItemIcon>
            <ListItemText primary={'Active Sprints'} />
        {openlist2 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openlist2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link to="ActiveSprintList">
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <Toc />
            </ListItemIcon>
            <ListItemText primary="Active Sprints" />
          </ListItem>
          </Link>
          <Link to="ActiveSprintCreate">
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <Toc />
            </ListItemIcon>
            <ListItemText primary="Create Active Sprint" />
          </ListItem>
          </Link>
        </List>
      </Collapse>
            <ListItem  button key={2} onClick={()=>setOpenlist3(!openlist3)}>
        <ListItemIcon>
          <BugReport />
        </ListItemIcon>
        <ListItemText primary="Issues" />
        {openlist3 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openlist3} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link to="IssuesList">
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <BugReport />
            </ListItemIcon>
            <ListItemText primary="Issues" />
          </ListItem>
          </Link>
          <Link to="IssuesCreate">
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <BugReport />
            </ListItemIcon>
            <ListItemText primary="Create Issue" />
          </ListItem>
          </Link>
        </List>
      </Collapse>
        </List>
      </Drawer>
    </div>
  );
}
