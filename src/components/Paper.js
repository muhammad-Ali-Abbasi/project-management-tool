import React from 'react';
import Paper from '@material-ui/core/Paper';
const Papers = (props) => {
    return ( 
        
        <Paper elevation={props.elevation?props.elevation:null}>
            {props.children}
        </Paper>

     ); 
}
 
export default Papers;