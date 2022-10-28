import React from 'react'
import {Pie} from "react-chartjs-2"
import {Chart as ChartJS} from "chart.js/auto"
import { Chart } from 'chart.js';
import { MatrixController, MatrixElement } from 'chartjs-chart-matrix';

// Chart.register(MatrixController, MatrixElement);

const Heat = new Chart('matrix-chart', {
    type: 'matrix',
    data: {
      datasets: [{
        label: 'Basic matrix',
        data: [{x: 1, y: 1}, {x: 2, y: 1}, {x: 1, y: 2}, {x: 2, y: 2}],
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.5)',
        backgroundColor: 'rgba(200,200,0,0.3)',
        width: ({chart}) => (chart.chartArea || {}).width / 2 - 1,
        height: ({chart}) => (chart.chartArea || {}).height / 2 - 1,
      }],
    },
    options: {
      scales: {
        x: {
          display: false,
          min: 0.5,
          max: 2.5,
          offset: false
        },
        y: {
          display: false,
          min: 0.5,
          max: 2.5
        }
      }
    }
  });

export default Heat