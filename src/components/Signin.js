import { useState } from "react/cjs/react.development"
import '../App.css'
export default function Signin(){
    const[email, setEmail]=useState('')
    const[password, setPassword]=useState('')
    const[data, setData]=useState([])
    // const basedURL = "https://thegreenlab.xyz"
    const basedURL = "http://127.0.0.1:3000"
    async function login(){
        const response = await fetch(basedURL+"/Users/Auth/Login",{
            method: 'POST',
            headers:{'Content-Type':'application/json',
            'Authorization':'Basic dnZAZ21haWwuY29tOjEyMzQ1Ng==' },
            body: JSON.stringify({Email:email, psassword:password})
        })
        const data = await response.json()
        console.log(data)
      .then(data=>setData(data))  

    .then(json=> {
        //sessionStorage
        sessionStorage.setItem("base64", json.hash) 
      
        //show main body
        window.location.reload();
    })
}
   

    return(
        <div className="signin" >
            
            
        <h1 style={{textAlign: 'center', fontFamily:'inherit', color:'grey', fontWeight:'bold', fontSize:'40px'}}>Sign In</h1> <br/>
        <label>Email:</label> <br/>
        <input type="text" placeholder="email"/>
        <label>Password:</label>
        <input type="password" placeholder="password"/> <br/><br/>

        <button type="button" onClick={()=> login()} >Sign In</button> <br/><br/>
        <a style={{fontWeight: 'normal'}} href="/forgotpassword">Forgot Password</a> &nbsp;&nbsp;&nbsp;
        <a style={{fontWeight: 'normal'}} href="/signup">Sign Up</a>
        </div>
    )
}