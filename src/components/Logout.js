import { faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect } from 'react'

export default function Logout (){
    const signout = ()=>{
        sessionStorage.removeItem('token')
        window.location.reload()
     console.log("out")
    }
    return (
      <div>
      <a href='#' onClick={()=>signout()} /> 
      </div>
    )
  
}
