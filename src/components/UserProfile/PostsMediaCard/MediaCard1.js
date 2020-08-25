import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Box from '@material-ui/core/Box';
import { Divider } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import {connect} from "react-redux"
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop:"2.4rem"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  IconButtonsBox:{
      marginTop: "1.6rem",
      marginBotom: "1.6rem",
      display:"flex",
      alignItems:"center"
  }
  ,gutterSpace:{
      flexGrow:'1'
  },
  cardHeader:{
    marginTop:"1.6rem",
      display: "flex",
      justifyContent: "flex-start"
  }
  ,cardHeaderTitle:{
    display:"flex",
    flexDirection:"column"
  }
  ,cardHeaderSubtitle:{
      display:"flex",
      flexDirection:"row",
      alignItems:"center"
  },cardHeaderSubtitleIcon:{
      marginRight:".6rem"
  },cardContentpara:{
      display:"flex",
      alignSelf:"flex-start",
      marginBottom:"1.6rem",
  },
  divider:{
    marginBottom:"1.6rem",
    marginTop:"1.6rem",
  }
  ,
  comments:{
      display:"flex",
      marginBottom:"1.6rem",
      width:"90%",
      marginLeft:"auto",
      marginRight:"auto",
  },
  commentPara:{
      marginLeft:"1.6rem",
      flexGrow: "1",
    padding: "1.6rem",
  },
  commentParaContent:{
    display: "flex",
    alignItems: "center",
    marginBottom: "8px",
    justifyContent:"space-between"
  },commentInput:{
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft:".6rem",
    marginBottom:"1.6rem",
  }
  ,
  avatar: {
    marginRight: "1.6rem",
    backgroundSize:"cover",
    width: "3rem",
    height:"3rem",
    borderRadius: "50%",
    backgroundRepaet:"no-repeat"
  },
}));

function PostCard1(props) {
  const classes = useStyles();
  

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardHeader}>
      <div style={{backgroundImage:"url(/assets/img/user-2.jpg)"}}  className={classes.avatar}></div>
          <div className={classes.cardHeaderTitle}>
            <Typography component="h3" variant="h5" >{props.username}</Typography>
            <div className={classes.cardHeaderSubtitle} >
            <AccessTimeIcon className={classes.cardHeaderSubtitleIcon}/>
            <Typography component="span" variant="caption"  >4 Hours</Typography>
            </div>
            </div>
            </CardContent>
      <CardContent>
      <Typography variant="body2" color="textSecondary" component="p" className={classes.cardContentpara}>
      Just made this home screen for a project, what-cha thinkin?
        </Typography >
      <CardMedia
        className={classes.media}
        image="/assets/img/office-1.jpg"
        title="Paella dish"
      />
      </CardContent>
      <Box className={classes.IconButtonsBox} >
        <IconButton aria-label="add to favorites">
          <FavoriteIcon color="error" />
        </IconButton>
        <Typography component="h6" variant="subtitle1" color="textPrimary">24</Typography>
        <div className={classes.gutterSpace}></div>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </Box>
      <Box className={classes.divider}>
      <Divider variant="middle" />
      </Box>
      <Paper elevation={0} className={classes.comments}>
         
      <div style={{backgroundImage:"url(/assets/img/user-7.jpg)"}}  className={classes.avatar}></div>
          <Paper elevation={2} className={classes.commentPara}>
              <Box className={classes.commentParaContent}>
                  <Typography component="a" variant="h6" color="textPrimary" >Anje Keizer</Typography>
                  <Typography component="span" variant="caption"  >4 Hours</Typography>
              </Box>
              <Typography component="p" variant="body1" color="textPrimary">Could use some more statistics, but that’s me haha</Typography>
          </Paper>
          
      </Paper>
      <Paper elevation={0} className={classes.comments}>
         
      <div style={{backgroundImage:"url(/assets/img/user-7.jpg)"}}  className={classes.avatar}></div>
          <Paper elevation={2} className={classes.commentPara}>
              <Box className={classes.commentParaContent}>
                  <Typography component="a" variant="h6" color="textPrimary" >Anje Keizer</Typography>
                  <Typography component="span" variant="caption"  >4 Hours</Typography>
              </Box>
              <Typography component="p" variant="body1" color="textPrimary">Could use some more statistics, but that’s me haha</Typography>
          </Paper>
          
      </Paper>
      <Box className={classes.divider}>
      <Divider variant="middle" />
      </Box>
      <Box className={classes.commentInput}>
      <div style={{backgroundImage:"url(/assets/img/user-2.jpg)"}}  className={classes.avatar}></div>
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
    </Card>
  );
}
const mapStateToProps=state=>({

  username: state.Auth.userName
})
export default connect(mapStateToProps)(PostCard1)