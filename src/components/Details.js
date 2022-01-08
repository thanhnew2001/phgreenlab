import React, { useState, useEffect } from "react";
import moment from "moment";
export default function Details() {
    // const datetime = moment()
    const [data, setData] = useState([])
    const [receivedDate, setReceivedDate] = useState('')
    const [response, setResponse] = useState([])
    const [stDate, setStDate]=useState('2021-12-01')
    const [enDate, setEnDate]=useState('')

    

    useEffect(async () => {
        // show()
       
    }, []);

    const show =  async()=>{
        let queryString = window.location.search
    let params = new URLSearchParams(queryString);
    let serialNumber = params.get("DeviceSerialNumber"); // is the number 123
    let today = new Date()
    let stDate2 = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    // const endPoint = 'http://127.0.0.1:3000/Datums/StatisticDataByDevice?DeviceSerialNumber=CA21101009-03&StartDate=2021-12-01&EndDate=2022-01-06'
    const endPoint = `http://127.0.0.1:3000/Datums/StatisticDataByDevice?DeviceSerialNumber=${serialNumber}&StartDate=${stDate2}&EndDate=${stDate2}`
   console.log(stDate2)
        const data = await fetch(endPoint, {
            method: 'GET',
            headers: { 'Authorization': 'Basic aGllbkBnbWFpbC5jb206MTIz' }
        })
        const response = await data.json()
        // console.log(response)
        setResponse(response)
    }
    const show2 =  async()=>{
        let queryString = window.location.search
    let params = new URLSearchParams(queryString);
    let serialNumber = params.get("DeviceSerialNumber"); // is the number 123
    let today = new Date()
    let stDate2 = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    // const endPoint = 'http://127.0.0.1:3000/Datums/StatisticDataByDevice?DeviceSerialNumber=CA21101009-03&StartDate=2021-12-01&EndDate=2022-01-06'
    const endPoint = `http://127.0.0.1:3000/Datums/StatisticDataByDevice?DeviceSerialNumber=${serialNumber}&StartDate=${stDate}&EndDate=${enDate}`
   console.log(stDate2)
        const data = await fetch(endPoint, {
            method: 'GET',
            headers: { 'Authorization': 'Basic aGllbkBnbWFpbC5jb206MTIz' }
        })
        const response = await data.json()
        // console.log(response)
        setResponse(response)
    }

    return (
        <div>
            <h2>Details</h2>
            <label>From date:</label>
            <input type="date" value={stDate} onChange={(e)=>setStDate(e.target.value)}/>
            <label>To date:</label>
            <input type="date" value={enDate} onChange={(e)=>setEnDate(e.target.value)}/>
            <button onClick={()=>show2()}>Show</button>
            {response.map(a=>{
                return(
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
                            {a.data.map(b=>{
                                 return(
                                <tr>
                               
                                    <td>{b.DateOnly}</td>
                                    <td>{Math.round(b.AVG)}</td>
                                    <td>{Math.round(b.MIN)}</td>
                                    <td>{Math.round(b.MAX)}</td>
                               
                                </tr>
                                 )
                            })}
                       
                    </tbody>
                </table>
                </>
                )
            })}
        </div>
    )
}
{/* <script src="http://code.highcharts.com/highcharts.js"></script>;
<div id="container" style="min-width: 300px; height: 300px; margin: 1em"> hhhhhhh</div> */}