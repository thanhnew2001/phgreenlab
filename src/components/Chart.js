import React from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default function myChart(){
    const options = {
        chart: {
          type: 'spline'
        },
        title: {
        //   text: `${sensorType}`
        text:'temp'
        },
        series: [
          {
            data: [1, 2, 1, 4, 3, 6]
          }
        ]
      };
    
    return(
        <div>
        <h1> chart</h1>
       
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    )
}