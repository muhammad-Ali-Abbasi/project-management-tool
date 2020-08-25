import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';
  class PiChart extends Component {
      state = { data : {
        labels: [
            'Red',
            'Blue',
            'Yellow'
        ],
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ],
            borderAlign:"center"
        }]
    } }
      render() {
        return (
          
            <Pie   data={this.state.data} />
        
        );
      }
  }
   
  export default PiChart;