import React from 'react';
import Drawer from "../Drawer"
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import "./Projects.css"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop:"170px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Projects(props) {
  const classes = useStyles();

  return (

    
    <React.Fragment>
    <CssBaseline />
    <Container style={{margin:"auto", width:"80%"}}>
    <div className={classes.root}>
      <Grid container spacing={3} style={{display:"flex",alignItems:"center"}}>
        <Grid  item xs={12} md={6} style={{height:"200px",borderRadius:"22px",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center"}}>
            <Typography component="span" variant="overline" color="textSecondary">Projects</Typography>
            <Typography component="h3"  color="textPrimary">Good Morning, Katarina</Typography>
            <Typography component="h6" variant="subtitle1"  color="textPrimary">Here’s what’s happening with your projects today</Typography>
          <Box>
          <Button type="button" tabIndex="0" variant="contained" style={{backgroundColor:"white",outline:"none"}}>
              
              View summary
              
          </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} className="project-analysis-svg">
          <img size="cover" src="./assets/img/analytics.svg" className="project-svg" ></img>
        </Grid>
      </Grid>
      <Box>
        <Paper>
          <Grid  container spacing={0} style={{marginTop:"24px"}}>
          <Grid item xs={12} sm={6} md={3}  className="grid-item">
          <Typography component="h2" variant="h3" color="textPrimary">$4,250</Typography>
          <Typography component="span" variant="overline" color="textSecondary">$4,250</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}   className="grid-item">
          <Typography component="h2" variant="h3" color="textPrimary">$4,250</Typography>
          <Typography component="span" variant="overline" color="textSecondary">$4,250</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}   className="grid-item">
          <Typography component="h2" variant="h3" color="textPrimary">$4,250</Typography>
          <Typography component="span" variant="overline" color="textSecondary">$4,250</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}  className="grid-item">
          <Typography component="h2" variant="h3" color="textPrimary">$4,250</Typography>
          <Typography component="span" variant="overline" color="textSecondary">$4,250</Typography>
          </Grid>
          </Grid>
        </Paper>
      </Box>
      <Box  style={{marginTop:"50px",marginBottom:"30px"}}>
        <Paper >
        <List >
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      </List>
        </Paper>
      </Box>
      <Box>
        
          <Box  style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"}}>
            <Typography className="Active-projects-bar" component="h5" color="textPrimary">
            Active Projects
            </Typography>
            
            <Button
        variant="contained"
        color="default"
        style={{border:"none",outline:"none"}}
       >
        See all
      </Button>
          </Box>
          <Box>
            <Paper >
              <Box  style={{padding:"24px"}}>
              <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image="./assets/img/Capture.jpg"
          title="Contemplative Reptile"
          style={{backgroundSize:"cover"}}
        />
        <Box style={{display:"flex",alignItems:"center",marginTop:"24px",}}>
          <Avatar size={"small"} src="./assets/img/profile.jpg" alt="profile" style={{display:"inline-block"}}></Avatar>
          <Box style={{display:"flex", flexDirection:"column", alignItems:"flex-start",paddingLeft:"26px"}}>
            <Typography component="a" color="textPrimary" style={{textDecoration:"none",display:"inline-block"}}>
            Ten80 Web Design
            </Typography>
            <Typography component="p"  variant="body2" color="textSecondary">
            by <Typography component="a" color="textPrimary" style={{textDecoration:"none",display:"inline-block"}}>
            Katarina Smith
            </Typography> | Updated 2 hours ago
            </Typography>
          </Box>
        </Box>
              </Box>
            </Paper>
          </Box>
        
      </Box>
    </div>
    </Container>
    <Drawer  />
    </React.Fragment>
  );
}
