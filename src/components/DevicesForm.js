import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBold, faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faKeyboard } from "@fortawesome/free-regular-svg-icons";
import moment from 'moment';

export default function DevicesForm() {
const datetime = moment()
    const [data, setData] = useState([])
    const [id, setId] = useState('')
    const [friendlyName, setFriendlyName] = useState('')
    const [description, setDescription] = useState('')
    const [model, setModel] = useState('')
    const [serialNumber, setSerialNumber] = useState('')
    const [type, setType] = useState('')
    const [lab_Id, setLab_Id] = useState('')
    const [labSerialNumber, setLabSerialNumber] = useState('')
    const [dateSync, setDateSync] = useState('')
    const [isActive, setIsActive] = useState('')

    const basedURL = "http://thegreenlab.xyz:3000"
    const [loading, setLoading] = useState(true)

    const save = () => {
        if (id === '') {
            fetch(basedURL + "/Devices", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic aGllbkBnbWFpbC5jb206MTIz'
                },
                body: JSON.stringify({ dateSync: dateSync, description: description, friendlyName: friendlyName, model: model, serialNumber: serialNumber, type: type, isActive: isActive, lab_Id: lab_Id, labSerialNumber: labSerialNumber })
            }).then(data => setData(data))
        }
        else {
            fetch(basedURL + "/Devices", {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic aGllbkBnbWFpbC5jb206MTIz'
                },
                body: JSON.stringify({ id: id, dateSync: dateSync, description: description, friendlyName: friendlyName, model: model, serialNumber: serialNumber, type: type, isActive: isActive, lab_Id: lab_Id, labSerialNumber: labSerialNumber })
            }).then(data => setData(data))

        }

    }


    useEffect(async () => {
        const response = await fetch(basedURL + "/Devices", {
            method: 'GET',
            headers: { 'Authorization': 'Basic aGllbkBnbWFpbC5jb206MTIz' }
        })
        const data = await response.json()
        setData(data)
        setLoading(false)
    }, []);

    // function toggle(checked) {
    //     var elm = document.getElementById('checkbox');
    //     if (checked != elm.checked) {
    //       elm.click();
    //     }
    //   }
    // function myCheck() {
    //     var x = document.getElementById("checked").checked;
    //     document.getElementById("demo").innerHTML = x;
    // }

    const checked = document.querySelector('#isActive:checked') !== null;
    console.log(checked); 

    const editDevice = (dateSync, description, friendlyName, model, serialNumber, type, isActive, lab_Id, labSerialNumber) => {
        setDescription(description)
        setFriendlyName(friendlyName)
        setModel(model)
        setSerialNumber(serialNumber)
        setType(type)
        setIsActive(isActive)
        setLabSerialNumber(labSerialNumber)
        setDateSync(dateSync)
        setLab_Id(lab_Id)


    }

    const deleteDevice = (id) => {
        fetch(basedURL + "/Devices" + "/" + id, {
            method: "DELETE",
            headers: { 'Authorization': 'Basic aGllbkBnbWFpbC5jb206MTIz' }
        }).then(data => setData(data))

    }
    const addnew = () => {
        setDescription('')
        setFriendlyName('')
        setModel('')
        setSerialNumber('')
        setType('')
        setIsActive('')
        setId('')
        setLab_Id('')
        setLabSerialNumber('')
        setDateSync('')
    }


    return (
        <div className="container-labs">
            <h3>Devices</h3>
            <input type="hidden" className="form-control" value={id} onChange={(e) => setId(e.target.value)} />
            <label>DateSync:</label>
            <input type="datetime-local" className="form-control" value={dateSync} onChange={(e) => setDateSync(e.target.value)} />
            <label>Description:</label>
            <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />

            <label>FriendlyName:</label>
            <input type="text" className="form-control" value={friendlyName} onChange={(e) => setFriendlyName(e.target.value)} />

            <label>Model:</label>
            <input type="text" className="form-control" value={model} onChange={(e) => setModel(e.target.value)} />

            <label>SerialNumber:</label>
            <input type="text" className="form-control" value={serialNumber} onChange={(e) => setSerialNumber(e.target.value)} />

            <label>Type:</label>
            <input type="text" className="form-control" value={type} onChange={(e) => setType(e.target.value)} />
            <label>Lab_Id:</label>
            <input type="text" className="form-control" value={lab_Id} onChange={(e) => setLab_Id(e.target.value)} />
            <label>LabSerialNumber:</label>
            <input type="text" className="form-control" value={labSerialNumber} onChange={(e) => setLabSerialNumber(e.target.value)} />

            <label>IsActive:</label>
            <input type="checkbox" id="isActive" value="yes" /> <br />
            <button onClick={() => save()}>Save</button> <n />
            <button onClick={() => addnew()}>Add new</button> <br/><br/>
         
                <table className="table table-bordered">
                    <thead>
                        <tr>
                        <td>ID</td>
                            <td>DateSync</td>
                            <td> Description</td>
                            <td> FriendlyName</td>
                            <td> Model</td>
                            <td> SerialNumber</td>
                            <td> Type </td>
                            <td>Lab_Id</td>
                            <td>LabSerialNumber</td>
                            <td>IsActive</td>
                            <td>Active</td>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map(e => {
                            return (
                                <>
                                    <tr>
                                        {/* <td>  <input type="checkbox" id="checked" /> </td> */}
                                        <td>{e.Id}</td>  
                                        <td>{moment(e.DateSync).format("DD/MM/YY,HH:mm")}</td>                                      
                                        <td> {e.Description}</td>
                                        <td>{e.FriendlyName} </td>
                                        <td> {e.Model}</td>
                                        <td>{e.SerialNumber}</td>
                                        <td>{e.Type}</td>                         
                                        <td>{e.Lab_Id}</td>
                                        <td>{e.LabSerialNumber}</td>
                                        <td>{e.IsActive}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => editDevice(e.DateSync,e.Description, e.FriendlyName,  e.Model, e.SerialNumber, e.Type, e.IsActive, e.Lab_Id, e.LabSerialNumber)}><FontAwesomeIcon icon={faEdit} /></button> <n/>
                                            <button className="btn btn-success" onClick={() => deleteDevice(e._id)}> <FontAwesomeIcon icon={faTrashAlt} /> </button>
                                        </td>
                                    </tr>
                                    {/* <Link href={`/wpa/${e.id}`}>{e.title}</Link> */}
                                </>
                            )
                        }
                        )}
                    </tbody>
                </table>               
            </div>
    );
}

