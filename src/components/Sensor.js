// import { useState, useEffect } from "react";



// export default function Labs() {

//     const [data, setData] = useState([])
//     const [id, setId] = useState('')
//     const [measure, setMeasure] = useState('')
   
//     const [status, setStatus] = useState('')
//     const [deviceSerialNumber, setDeviceSerialNumber] = useState('')
//     const [sensorType, setSensorType] = useState('')
   

//     //const endPoint = "http://127.0.0.1:4000/Labs"
    
//     const endPoint = "http://thegreenlab.xyz:3000/Sensors"
//     const [loading, setLoading] = useState(true)
   
    
   
//     useEffect( async() => {
//         const response = await fetch(endPoint,{
//             method: 'GET',
//             headers:{'Authorization':'Basic aGllbkBnbWFpbC5jb206MTIz'}
//         })
//         const data = await response.json()
//         setData(data)
//       setLoading(false)
//     },[]);

// return(
// <div>
//     <h1> Sensor Table</h1>
// <table>
//                 <thead>
//                     <tr> 
//                         <td> Measure</td>
//                         <td> Status</td>
//                         <td>SensorType</td>
//                         <td> Device Serial Number</td>
                       
//                     </tr>
//                 </thead>
// <tbody>
//     {data.map(c=>{
//         return (
//         <tr>
//             <td> {c.Measure}</td>
//             <td> {c.Status} </td>
//             <td>{c.SensorType} </td>
//             <td>{c.DeviceSerialNumber}</td>
       
//         </tr>
//         )
//     })}
//     </tbody>
//     </table>
// </div>
// )
// }