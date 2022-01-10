import React, { useState, useEffect } from "react";
import moment from "moment";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
export default function Details() {
    // const datetime = moment()
    const [data, setData] = useState([])
    const [receivedDate, setReceivedDate] = useState('')
    const [response, setResponse] = useState([])
    const [stDate, setStDate] = useState('')
    const [enDate, setEnDate] = useState('')

    const [chartOptions, setChartOptions] = useState([])

    const basedURL = "https://thegreenlab.xyz"


    useEffect(async () => {
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
            sOptions.push({
                chart: {
                    type: 'spline'
                },
                title: {
                    //   text: `${sensorType}`
                    text: sensor.sensorType
                },
                series: [
                    {
                        data: temp
                    }
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
            {response.map((a, index) => {
                return (
                    <>
                        <p>{a.sensorType}</p>
                        <table className="table table-hover">
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
                                            <td>{Math.round(b.AVG)}</td>
                                            <td>{Math.round(b.MIN)}</td>
                                            <td>{Math.round(b.MAX)}</td>

                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                        <HighchartsReact highcharts={Highcharts} options={chartOptions[index]} />
                    </>
                )
            })}

            {/* {sensorData.map((sd, index) =>{
                return (
                    <HighchartsReact highcharts={Highcharts} options={chartOptions[index]} />
                )
            })} */}



        </div>

    )
}
