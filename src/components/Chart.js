import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import moment from 'moment';

export default function Chart(){
    const [data , setData]=useState([1,2,3,9,2]) 
    const [stDate, setStDate]=useState('')
    const[enDate, setEnDate]=useState('')
    const [response, setResponse]=useState([])
    
   async function show2 (){
        let queryString = window.location.search
        let params = new URLSearchParams(queryString);
        let serialNumber = params.get("DeviceSerialNumber"); // is the number 123
        let stDate1 = moment(stDate).format("YYYY-MM-DD")
    // const endPoint = 'http://127.0.0.1:3000/Datums/StatisticDataByDevice?DeviceSerialNumber=CA21101009-03&StartDate=2021-12-01&EndDate=2022-01-06'
    const endPoint = `http://127.0.0.1:3000/Datums/StatisticDataByDevice?DeviceSerialNumber=${serialNumber}&StartDate=${stDate1}&EndDate=${enDate}`
   
        const data = await fetch(endPoint, {
            method: 'GET',
            headers: { 'Authorization': 'Basic aGllbkBnbWFpbC5jb206MTIz' }
        })
        const response = await data.json()
        console.log(response)
        setResponse(response)
    }
    // show2().then(response => {
        const sensor = response.map(
          function (index) {
            return index.sensorType;
          })
          console.log(sensor)
    // })
        // const dtime = time[0].map(
        //   function (i) {
        //     return i.DateOnly
        //   })
        //   const avg = response.map(
        //     function (index) {
        //     return index.data;
        //   })
        //     const davg = time[0].map(
        //       function (i) {
        //         return (Math.round(i.AVG))
        //   }) 
        // console.log(davg)
        // useEffect(async () => {
        //     // show2()
           
        // }, []);  
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
            data: data
          }
        ]
      };
    
    return(
        <div>
        <h1> chart</h1>
        <label>From date:</label>
            <input type="date" value={stDate} onChange={(e)=>setStDate(e.target.value)}/>
            <label>To date:</label>
            <input type="date" value={enDate} onChange={(e)=>setEnDate(e.target.value)}/>
            <button onClick={()=>show2()}>Show</button>
        <HighchartsReact highcharts={Highcharts} options={options} />

      </div>
    )

}

    