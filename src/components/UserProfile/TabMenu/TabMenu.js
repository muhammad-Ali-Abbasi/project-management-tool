import React from 'react';
import PostCard1 from "../PostsMediaCard/MediaCard1"
import AboutList from "../AboutList/AboutList"
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import Box from '@material-ui/core/Box';
import { CardHeader, Divider } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
//css
import "../UserProfile.css"
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
   flexFlow:"1",
   marginLeft:"3rem",
   color: "#5ca9b6",
   
  },
  MuiTabsIndicator:{
    color: "#5ca9b6",
    backgroundColor: "#5ca9b6"
  },
  bordrBox:{
      boxShadow: 'none',
      borderBottom:"1px solid #c4c3c4"
  },TextFieldColor:{
    outlineColor: "#5ca9b6",
    borderColor: "#5ca9b6"
  }
}));

export default function TabMenu() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" className={classes.bordrBox}>
        <Tabs
        
          value={value}
          onChange={handleChange}
          indicatorColor={classes.MuiTabsIndicator}
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab  label="Timeline" {...a11yProps(0)} />
          <Tab label="Connections" {...a11yProps(1)} />
          <Tab label="Projects" {...a11yProps(2)} />
          <Tab label="Reviews" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      
        <TabPanel value={value} index={0} dir={theme.direction}>
        <Box className="profile-tab-menu-item-box">
                                <Grid container spacing={2}>
                                    <Grid item lg={4} md={6} xs={12}>
                                        <Card elevation={1} rounded >
                                            <CardHeader  title="profile progress"/>
                                            <Divider></Divider>
                                            <CardContent>
                                                <LinearProgress variant="determinate" className={classes.colorPrimary} role="progressbar" value="50" />
                                                <Box className="profile-tab-menu-item1-progressbar-typo">
                                                    <Typography component="h6" variant="subtitle2" color="textSecondary">50% Set Up Complete</Typography>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                        <Box className="profile-tab-menu-item1-progressbar-typo">
                                            <Card elevation={1} rounded >
                                                <CardHeader title="About"/>
                                                <Divider/>
                                                <CardContent>
                                                    <Typography component="h6" variant="subtitle1" color="textSecondary">"Everyone thinks of changing the world, but no one thinks of changing himself."</Typography>
                                                    <AboutList></AboutList>
                                                </CardContent>
                                            </Card>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={8}>
                                    <Card elevation={1} rounded >

                                            <CardContent >
                                              <Box className="profile-tab-menu-item1-send">
                                                <Paper elevation={0} rounded className="profile-tab-menu-item1-send-input">
                                                  <TextField className={classes.TextFieldColor} variant="outlined" fullWidth placeholder="hello!"></TextField>
                                                </Paper>
                                                <IconButton>
                                                  <ArrowForwardIcon/>
                                                </IconButton>
                                                  <IconButton>
                                                    <PhotoCameraIcon/>
                                                </IconButton>
                                                <IconButton>
                                                    <AttachFileIcon/>
                                                </IconButton>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                        <PostCard1/>
                                    </Grid>
                                        
                                    
                                </Grid>
                            </Box>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Item four
        </TabPanel>
      
    </div>
  );
}
