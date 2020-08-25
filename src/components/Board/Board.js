import React from 'react';
import Drawer  from "../Drawer";
import Container from "./FluidContainer/FludContainer"
import Paper from '@material-ui/core/Paper';
import ControlledBoard from "./KhanbanBoard/KhanbanBoard"

const Board = (props) => {
    return ( 
    <>
    <Container>
       <Paper>
           <ControlledBoard/>
       </Paper>
    </Container>
    <Drawer />
    </> );
}
 
export default Board;