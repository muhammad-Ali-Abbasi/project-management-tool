import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PersonIcon from '@material-ui/icons/Person';
import { Switch, Route, Link, BrowserRouter, Redirect } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: 50,
    flexGrow: 1,
    backgroundColor: 'darkcyan'
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
// <Tab label={<PersonIcon />} value="/auth"> </Tab>
    //<div className={classes.root}>
       const allTabs = ['/', '/auth', '/dashboard'];

return (
  <div className={classes.root}>
  <BrowserRouter>
    <div className="App">
      <Route
        path="/"
        render={({ location }) => (
          <Fragment>
            <Tabs value={location.pathname}>
            <Link to="/about">About</Link>

              <Tab label="Item One" value="/" component={Link} to={allTabs[0]} />
              <Tab label="Item Two" value="/auth" component={Link} to={allTabs[1]} />
              <Tab
                value="/dashboard"
                label="Item Three"
                component={Link}
                to={allTabs[2]}
              />
            </Tabs>
            <Switch>
              <Route path={allTabs[1]} render={() => <div>Tab 2</div>} />
              <Route path={allTabs[2]} render={() => <div>Tab 3</div>} />
              <Route path={allTabs[0]} render={() => <div>Tab 1</div>} />
            </Switch>
          </Fragment>
        )}
      />
    </div>
  </BrowserRouter>
  </div>
  );
}