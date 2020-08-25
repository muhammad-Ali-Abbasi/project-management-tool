import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid'; 
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
// //comps
import AlignItemsList from "../CustomerList/customersList"
import LineChart from '../LineChart/Chart';
import Drawer from '../../Drawer'
import Card  from '../Card/Card'
import PiChart from '../PiChart/PiChart'
import Table from "../Table/Table"
import LongMenu from "../../popMenu"
import Box from '@material-ui/core/Box';
import { CardHeader} from '@material-ui/core';
//css

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:"80%",
    paddingTop:"130px",
    margin:"auto",backgroundColor:"inherit"
  },
}));


function Main(props) {
  const classes = useStyles();

  return (
    <>
      <Drawer setdarkMode={props.setdarkMode} darkmodehandler={props.darkmodehandler} darkMode={props.darkMode}/>
      <div className={classes.root }>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6} lg={3}>
          <Card>
          <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Tasks for today
        </Typography>
        <Typography variant="h5" component="h2">
          Completed
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          In Progress
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          98%
          <br />
          89%
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
            </Card>
          
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card>
          <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Tasks for today
        </Typography>
        <Typography variant="h5" component="h2">
          Completed
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          In Progress
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          98%
          <br />
          89%
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
            </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card>
          <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Tasks for today
        </Typography>
        <Typography variant="h5" component="h2">
          Completed
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          In Progress
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          98%
          <br />
          89%
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
            </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card>
          <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Tasks for today
        </Typography>
        <Typography variant="h5" component="h2">
          Completed
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          In Progress
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          98%
          <br />
          89%
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
            </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={8}>
          <Card>
          <CardHeader
        action={
          <LongMenu/>
        }
        title="Shrimp and Chorizo Paella"
      /> 
        <CardContent> 
            <LineChart/>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <Card>
          <CardHeader
        action={
          <LongMenu/>
        }
        title="Earnings Segmentation"
      /> 
        <CardContent > 
            <PiChart/>
      
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={8}>
          <Card>
          <CardHeader
        action={
          <LongMenu/>
        }
        title="Shrimp and Chorizo Paella"
      /> 
        <CardContent> 
            <Table/>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <Card>
          <CardHeader
        action={
          <LongMenu/>
        }
        title="Customer Activity"
      /> 
      <Divider  />
        <CardContent> 
            <Box style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
              <div>
              <Typography variant="h3"  component="h3" align="center" color="textPrimary">
                15,00
              </Typography>
              <Typography variant="overline"  component="h4" align="center" color="textSecondary" gutterBottom >
                REGESTERED
              </Typography></div>
            <Divider  orientation="vertical" />
            <div>
            <Typography variant="h3"  component="h3" align="center" color="textPrimary">
                15,00
              </Typography>
              <Typography variant="overline"  component="h4" align="center" color="textSecondary" gutterBottom >
                REGESTERED
              </Typography>
              </div>
            </Box>
            <Divider variant="fullWidth" />
            <AlignItemsList/>
          </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={8}>
          <Card>
          <CardHeader
        action={
          <LongMenu/>
        }
        title="Shrimp and Chorizo Paella"
      /> 
        <CardContent> 
            <Table/>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <Card>
          <CardHeader
        action={
          <LongMenu/>
        }
        title="Customer Activity"
      /> 
      <Divider  />
        <CardContent> 
            <Box style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
              <div>
              <Typography variant="h3"  component="h3" align="center" color="textPrimary">
                15,00
              </Typography>
              <Typography variant="overline"  component="h4" align="center" color="textSecondary" gutterBottom >
                REGESTERED
              </Typography></div>
            <Divider  orientation="vertical" />
            <div>
            <Typography variant="h3"  component="h3" align="center" color="textPrimary">
                15,00
              </Typography>
              <Typography variant="overline"  component="h4" align="center" color="textSecondary" gutterBottom >
                REGESTERED
              </Typography>
              </div>
            </Box>
            <Divider variant="fullWidth" />
            <AlignItemsList/>
          </CardContent>
          </Card>
        </Grid>
      </Grid>
      
    </div>
    </>
  );
  }
  export default Main