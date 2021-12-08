// import { useState, useEffect } from "react";
// import moment from 'moment';
// import '../App.css';
// <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.5/lodash.min.js"></script>;
// <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet" />;
// <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js"></script>;
// <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>;
// <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
// export default function StatisticData() {

//     const datetime = moment()

//     const endPoint = `https://thegreenlab.xyz/Datums/StatisticData?StartDate=2021-12-01&EndDate=2021-12-31`

//     const [device, setDevice] = useState('')
//     const [json, setJson]= useState(null)
//     const [loading, setLoading] = useState(true)

//     useEffect(async () => {
//         const response = await fetch(endPoint, {
//             method: 'GET',
//             headers: { 'Authorization': 'Basic aGllbkBnbWFpbC5jb206MTIz' }
//         })
//         const json = await response.json()

//         // console.log(json)

//         const device = json.children[0]

//         setDevice(device)

//         setJson(json)
//         setLoading(loading)
//     }
//         , []);


//     return (
//         <div className="container mt-2">
            
           
//             {json.children.map(e => {
//                 <select >
//                 <option value={device} onChange={()=>setDevice(e.target.value)}> {e.name}</option>
                
//                 </select>
//                 return (
//                     <div>
                         
                        
//                         <h2>{e.name}</h2>
//                         {e.children.map(s => {
//                             return (
//                                 <>
//                                     <h4 style={{color: 'darkblue'}}>{s.name}</h4>
//                                     <table className="table mt3">
//                                         <tr class="table-info">
//                                             <td rowSpan="1">Date</td>
//                                             <td style={{textAlign:'right'}}>Value:</td>
//                                             <td style={{textAlign:'left'}}>Avg</td>
//                                             <td style={{textAlign:'left'}}>Min</td>
//                                             <td style={{textAlign:'left'}}>Max</td>
//                                         </tr>

//                                         {s.children.map(d => {

//                                             return (
                                               
//                                                 <tr>
//                                                     <td>{d.name}</td>
//                                                     <td></td>
//                                                     <td style={{textAlign:'left'}}>{Math.round(d.children[0].AVG,2)}</td>
//                                                     <td style={{textAlign:'left'}}>{Math.floor(d.children[0].MIN)}</td>
//                                                     <td style={{textAlign:'left'}}>{Math.floor(d.children[0].MAX)}</td>

//                                                 </tr>
                                               
//                                             )
//                                         })}
//                                     </table>
//                                 </>
//                             )

//                         })}
//                     </div>
//                 )
//             })}
//         </div>

//     )
   

// }


