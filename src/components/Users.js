import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBold, faEdit, faTrashAlt, faArrowRight, faArrowLeft, faArrowsLeftRight } from "@fortawesome/free-solid-svg-icons";
import { faKeyboard, } from "@fortawesome/free-regular-svg-icons";

export default function Users() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [id, setId] = useState('')
  const [data, setData] = useState([])
  const [dataDevice, setDataDevice] = useState([])
  const [selectedDevices, setSelectedDevices] = useState([])
  const [loading, setLoading] = useState(true)
  const baseURL = 'http://thegreenlab.xyz:3000'
  //const baseURL1 = 'http://127.0.0.1:3000'

  useEffect(async () => {
    load()
  }, [])

  const load = async () => {
    const response = await fetch(baseURL + "/Users", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic aGllbkBnbWFpbC5jb206MTIz'
      },
    })
    const data = await response.json()
    // console.log(data);
    setData(data)
    setLoading(false)
  }

  function save() {
    if (id === '') {
      fetch(baseURL + "/Users/Auth/Register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ Email: email, Password: password, userDevices: [] })
      }).then(data => load())
    }
    else {
      fetch(baseURL + "/Users", {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic aGllbkBnbWFpbC5jb206MTIz'
        },
        body: JSON.stringify({ Id: id, Email: email, Password: "$2a$10$aiSdpwAyJiR0oQw4KNe0hulvH.ICF1f6MGuWtwQ05l.ymo9HR49Um" })
      }).then(data => load())
    }
  }

  const addnew = (id, email) => {
    setId('')
    setEmail('')
    setPassword('')
  }

  const editUser = (id, email, password) => {
    setEmail(email)
    setId(id)
    setPassword(password)
  }
  const deleteUser = (Id) => {
    fetch(baseURL + "/Users" + "/" + Id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic aGllbkBnbWFpbC5jb206MTIz'
      },
    }).then(data => load())
  }

  

  

  return (
    <div>
      <div className="container-user">
        <h3>Users Management</h3>
        <div class="mb-3 mt-3">
          <input type="hidden" value={id} onChange={(e) => setId(e.target.value)} />
        </div>
        <div class="mb-3 mt-3">
          <label style={{ width: 100 }}>Email:</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div class="mb-3 mt-3">
          <label style={{ width: 100 }}>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
      
      </div>
      <div className="btnDeviceForm">
        <button class="btn btn-primary" style={{ fontWeight: 'bold' }} onClick={() => save()}>Save</button> &nbsp; &nbsp;
        <button class="btn btn-primary" style={{ fontWeight: 'bold' }} onClick={() => addnew()}>Add new</button>
      </div>

      <div className="infoTable">
        <table className="table table-bordered">
          <thead style={{ fontWeight: 'bold' }}>
            <tr>
              <td>ID</td>
              <td>Email</td>
              <td>Devices</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>

            {data.map(e => {
              return (

                <tr>
                  <td>{e.Id}</td>
                  <td>{e.Email}</td>
                  <td>
                    <a href='/assignUser'> Assign User</a>
                  </td>
                  <td>
                    <button className="btn btn-success" onClick={() => editUser(e.Id, e.Email, e.Password)}><FontAwesomeIcon icon={faEdit} />Reset password</button> &nbsp;
                    <button className="btn btn-success" onClick={() => deleteUser(e.Id)}> <FontAwesomeIcon icon={faTrashAlt} /> </button>
                  </td>
                </tr>

              )

            })}

          </tbody>
        </table>
      </div>
    </div>
  )
}
