import React from 'react'
import { useContext, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from '../src/App'



function login() {
  const {setUser} = useContext(AuthContext)

  const {info, setInfo} = useState({
    email:"",
    password:""
  })

  const navigate = useNavigate()

  const onLogin = async ()=>{
      
  }

  return (
    <div>
      
    </div>
  )
}

export default login
