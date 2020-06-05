import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
//comps
import LineChart from './Chart';
import Drawer from './Drawer'
import Card  from './Card'


const style = {
  table: {
        minWidth: 650,
      },
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  borderRadius: 3,
  border: 0,
  color: 'white',
  height: 48,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  login: {
      background: 'linear-gradient(45deg, #20B2AA 30%, rgb(9, 147, 189) 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'}
};

export default class Main extends React.Component {
    constructor(props) {
      super(props);
  
    }
  
    componentDidMount() {
     
    }
  
    render() {
      return (
        <div className="Main">
          <div className="main chart-wrapper">
          <TableContainer component={Paper}>
                <Table className={style.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                  <TableBody>
                  <span style={{ marginLeft: '20%' }} >
                  <TableRow>
                      <TableCell>
                        <span style={{ whiteSpace: 'nowrap',  paddingLeft: '20%', width: '150px', display: 'block' }}>
                            <Card />
                        </span>
                      </TableCell>
                      <TableCell>
                        <span style={{ whiteSpace: 'nowrap', paddingLeft: '20%', marginLeft: '20%', width: '150px', display: 'block' }}>
                            <Card />
                        </span>
                      </TableCell>
                      <TableCell>
                        <span style={{ whiteSpace: 'nowrap', paddingLeft: '40%', marginLeft: '20%',width: '150px', display: 'block' }}>
                            <Card />
                        </span>
                      </TableCell>
                      <TableCell>
                        <span style={{ whiteSpace: 'nowrap', paddingLeft: '60%', marginLeft: '20%',width: '150px', display: 'block' }}>
                            <Card />
                        </span>
                      </TableCell>
                    </TableRow>
                  </span>
                    <TableRow>
                        <TableCell component="th" scope="row">
                        </TableCell>
                        <TableCell component="th" scope="row">
                            <Typography variant="h5" component="h2"> Velocity </Typography>
                        </TableCell>
                    </TableRow>
                   
            </TableBody>
          </Table>

          <Table className={style.table} aria-label="simple table">
                  <TableBody>
                    <TableRow>
                       <TableCell component="th" scope="row">
                       </TableCell>
                       <TableCell component="th" scope="row">
                           <LineChart />
                       </TableCell>
                       <TableCell component="th" scope="row">
                           <LineChart />
                       </TableCell>
                   </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

           
            <Drawer />
            Active Users
            
         
          </div>
        </div>
      );
    }
  }