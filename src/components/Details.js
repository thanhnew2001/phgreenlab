import React, { useState, useEffect } from "react";
import moment from "moment";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import '../App.css';
export default function Details() {
    // const datetime = moment()
    const [data, setData] = useState([])
    const [receivedDate, setReceivedDate] = useState('')
    const [response, setResponse] = useState([])
    const [stDate, setStDate] = useState('')
    const [enDate, setEnDate] = useState('')

    const [chartOptions, setChartOptions] = useState([])

    const basedURL = "https://thegreenlab.xyz"

    function today() {
        return new Date();
    }
    
    function lastWeek() {
        return new Date(today().getTime() - 30*24 * 60 * 60 * 1000);
    }
    
    // Get formatted date YYYY-MM-DD
    function getFormattedDate(date) {
        return date.getFullYear()
            + "-"
            + ("0" + (date.getMonth() + 1)).slice(-2)
            + "-"
            + ("0" + date.getDate()).slice(-2);
    }


    useEffect(async () => {
        setStDate(getFormattedDate(lastWeek()))
        setEnDate(getFormattedDate(today()))
        // show()

    }, []);

    const show = async () => {
        let queryString = window.location.search
        let params = new URLSearchParams(queryString);
        let serialNumber = params.get("DeviceSerialNumber"); // is the number 123
        let today = new Date()
        let stDate2 = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        // const endPoint = 'http://127.0.0.1:3000/Datums/StatisticDataByDevice?DeviceSerialNumber=CA21101009-03&StartDate=2021-12-01&EndDate=2022-01-06'
        const endPoint = `${basedURL}/Datums/StatisticDataByDevice?DeviceSerialNumber=${serialNumber}&StartDate=${stDate2}&EndDate=${stDate2}`
        console.log(stDate2)

        const data = await fetch(endPoint, {
            method: 'GET',
            headers: { 'Authorization': 'Basic aGllbkBnbWFpbC5jb206MTIz' }
        })
        const response = await data.json()
        // console.log(response)
        setResponse(response)
    }

    const show2 = async () => {
        let queryString = window.location.search
        let params = new URLSearchParams(queryString);
        let serialNumber = params.get("DeviceSerialNumber"); 

        // const endPoint = 'http://127.0.0.1:3000/Datums/StatisticDataByDevice?DeviceSerialNumber=CA21101009-03&StartDate=2021-12-01&EndDate=2022-01-06'
        const endPoint = `${basedURL}/Datums/StatisticDataByDevice?DeviceSerialNumber=${serialNumber}&StartDate=${stDate}&EndDate=${enDate}`
        const data = await fetch(endPoint, {
            method: 'GET',
            headers: { 'Authorization': 'Basic aGllbkBnbWFpbC5jb206MTIz' }
        })
        const response = await data.json()
        setResponse(response)

        
        let sOptions = []
        for (var i = 0; i < response.length; i++) {
            //di qua tung sensor
            let sensor = response[i]
            
            let temp = []
            for (var j = 0; j < sensor.data.length; j++) {
                temp.push(sensor.data[j].AVG)
            }
            let min = []
            for (var j = 0; j < sensor.data.length; j++) {
                min.push(sensor.data[j].MIN)   
            }
            let max = []
            for (var j = 0; j < sensor.data.length; j++) {
                max.push(sensor.data[j].MAX)   
            }
            sOptions.push({
                chart: {
                    type: 'spline'
                },
                title: {

                    text: sensor.sensorType
                },
                series: [
                    {data: temp}, 
                    {data: min},
                    {data: max}
                ]
            })
            
        }
        setChartOptions(sOptions)
    }

    console.log(chartOptions)

    return (
        <div>
            <h2>Details</h2>
            <label>From date:</label>
            <input type="date" value={stDate} onChange={(e) => setStDate(e.target.value)} />
            <label>To date:</label>
            <input type="date" value={enDate} onChange={(e) => setEnDate(e.target.value)} />
            <button onClick={() => show2()}>Show</button>
            <div class="content">
            {response.map((a, index) => {
                return (
                    <>
                        <p>{a.sensorType}</p>
                        <table className="table table-hover" >
                            <thead>
                                <tr>
                                    <td>Date</td>
                                    <td>Avg</td>
                                    <td>Min</td>
                                    <td>Max</td>
                                </tr>
                            </thead>
                            <tbody>
                                {a.data.map(b => {
                                    return (
                                        <tr>

                                            <td>{moment(b.DateOnly).format("YYYY-MM-DD")}</td>
                                            <td>{Math.round(100*b.AVG)/100}</td>
                                            <td>{Math.round(100*b.MIN, 2)/100}</td>
                                            <td>{Math.round(100*b.MAX, 2)/100}</td>

                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                        <div >
                        <HighchartsReact highcharts={Highcharts} options={chartOptions[index]} />
                        </div>
                    </>
                )
            })}
</div>
            {/* {sensorData.map((sd, index) =>{
                return (
                    <HighchartsReact highcharts={Highcharts} options={chartOptions[index]} />
                )
            })} */}



        </div>

    )
}
