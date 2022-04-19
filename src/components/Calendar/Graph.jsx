import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {FaStop} from  "react-icons/fa";
import ReactApexChart from 'react-apexcharts';
import ApexCharts from 'apexcharts'

class Graph extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        
        series: [44, 55, 67, 83],
        

        options: {
          chart: {
            height: 200,
            width: '80%',
            type: 'radialBar',
          },
          plotOptions: {
            radialBar: {
              dataLabels: {
                name: {
                  fontSize: '14px',
                },
                value: {
                  fontSize: '12px',
                },
              }
            }
          },
          colors: ['rgba(113, 128, 150, 1)', 'rgba(255, 223, 107, 1)', 'rgba(161, 134, 35, 1)', 'rgba(19, 32, 161, 1)'],
          labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
          
        },
      
      
      };
    }

  

    render() {
      return (
        
        <div className='Analysis-graph'>
            <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={250} />
        </div>
            <div className='graph'>
            <ul className=''>
            {/* {this.state.series.map((val, key) =>{
                <h3>{val}</h3>
                // {key}

            })} */}
                {/* {this.state.series} */}
                {this.state.options.labels.map((val, key) =>{
                    return(
                        <li key={key}>
                            <div className='displayFlex'>
                                    {/* {this.state.series[key]} */}
                                <div className='marginRight10'
                                style={{color:this.state.options.colors[key]}}>
                                  <FaStop />   
                                 </div>
                                <div className='width'>{val}</div>
                                <h5 className='marginLeft10'>{this.state.series[key]}</h5>
                                
                            </div>
                        </li>
                    )
                })}
            </ul>
            </div>
        </div>
 

      );
    }
  }

  export default Graph;

