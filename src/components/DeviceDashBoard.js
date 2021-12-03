import { useState, useEffect } from "react";
import moment from 'moment';
import '../App.css';
<script src="https://cdn.jsdelivr.net/npm/lodash@4.17.5/lodash.min.js"></script>;
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet"/>;
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js"></script>;
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>;
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
export default function Devicedb() {

    const datetime = moment()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [bigdata, setBigdata] = useState([])
    const endPoint = "http://thegreenlab.xyz:3000/Devices"



    useEffect(async () => {
        const response = await fetch(endPoint, {
            method: 'GET',
            headers: { 'Authorization': 'Basic aGllbkBnbWFpbC5jb206MTIz' }
        })
        const data = await response.json()

        let bigdata = []
        for (let i = 0; i < data.length; i++) {
            let d = data[i]
            let serialNumber = d.SerialNumber

            const deviceresponse = await fetch(`https://thegreenlab.xyz/Datums/LastestDataByDevice?DeviceSerialNumber=${serialNumber}`, {
                method: 'GET',
                headers: { 'Authorization': 'Basic aGllbkBnbWFpbC5jb206MTIz' }

            })

            const deviceData = await deviceresponse.json()

            bigdata = [...bigdata, { device: d, deviceData: deviceData }]

            setBigdata(bigdata)
            // console.log(bigdata)


        }
        setData(data)
        setLoading(false)
    }, []);





    return (
        <div className="container mt-8">
            <h1 className="text-muted" style={{padding: 20}}> Online Monitoring System</h1>

            <table className="table">
                <thead className="table-dark">
                    <tr>

                        <td>Description</td>
                        <td> DateSync</td>
                        <td> Friendly Name</td>
                        <td>Model</td>
                        <td>SerialNumber</td>
                        <td>Type</td>
                        <td>Lab Serial Number</td>
                        <td>Parameters</td>
                    </tr>
                </thead>
                <tbody>

                    {bigdata.map(b => {
                        return (
                            <tr >

                                <td>{b.device.Description}</td>
                                <td type="datetime">{moment(b.device.DateSync).format("DD/MM/YYYY, HH:mm")}</td>
                                <td>{b.device.FriendlyName}</td>
                                <td>{b.device.Model}</td>
                                <td >{b.device.SerialNumber}</td>
                                <td>{b.device.Type}</td>
                                <td>{b.device.LabSerialNumber}</td>
                                <td>
                                    {b.deviceData.map(a => {
                                        return (
                                            <>
                                                <span className="dot">{a.SensorType} <br/> {a.Value}</span>
                                                
                                            </>
                                        )
                                    }
                                    )}
                                </td>
                            </tr>

                        )
                    })}

                </tbody>
            </table>
            {/* {bigdata.map((d)=>{
                return(
 <span key={d.Id}> {d.device.SerialNumber}</span>
                )
            })} */}


        </div>

    )

}


