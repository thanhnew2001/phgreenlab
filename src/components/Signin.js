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
            body: JSON.stringify({email:email, password:password})
        })
        console.log(response);
        const data =await response.json()
    setData(data)
    }
    return(
        <div className="signin" >
            
            
        <h1>Sign In</h1>
        <label>Email:</label> <br/>
        <input type="text" placeholder="email"/>
        <label>Password:</label>
        <input type="password" placeholder="password"/> <br/><br/>

        <button type="button" onClick={()=> login()} >Sign In</button> <br/><br/>
        <a href="/forgotpassword">Forgot Password</a><br/>
        <a href="/signup">Sign Up</a>
        </div>
    )
}