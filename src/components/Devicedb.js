import { useState, useEffect } from "react";
import moment from 'moment';
import '../App.css';
<script src="https://cdn.jsdelivr.net/npm/lodash@4.17.5/lodash.min.js"></script>;
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet" />;
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js"></script>;
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>;
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
export default function StatisticData() {

    const datetime = moment()

    const endPoint = `https://thegreenlab.xyz/Datums/StatisticData?StartDate=2021-12-01&EndDate=2021-12-31`

    const [device1, setDevice1] = useState(null)

    useEffect(async () => {
        const response = await fetch(endPoint, {
            method: 'GET',
            headers: { 'Authorization': 'Basic aGllbkBnbWFpbC5jb206MTIz' }
        })
        const json = await response.json()

        console.log(json)

        //  const device1 = json.children[0]

        setDevice1(json.children[0])

        console.log(device1)
    }
        , []);


    return (
        <div className="container mt-8">
            {/* <table>
                <thead>
                    <tr>
                        <td> SensorType</td>
                        <td> Start Date</td>
                        <td> End Date</td>
                        <td> Value</td>
                    </tr>
                </thead>
                
            </table> */}
                    {device1.children.map(s => {

                        return (
                            <div>
                                {s.name} 


                                    {s.children.map(d => {
                                        return (

                                            <li>{d.name}: {d.children[0].AVG} | {d.children[0].MIN} |  {d.children[0].MAX}</li>
                                        )
                                    })}
                               
                            </div>
                        )
                    })}

              
        </div>

    )

}


