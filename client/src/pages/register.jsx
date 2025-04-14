import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {registerUser} from '/services/user'

function Register (){
    const [info, setInfo] = useState({
        name:'',
        email:'',
        password:'',
        phone:'',
        confirmPassword:''
    })
    const navigate = useNavigate()

    const onRegister= async () => {
        if (info.name.length == 0){
            toast.warn('Please enter the name')
        }
        else if (info.password.length == 0){
            toast.warn('Please enter the name')
        }
        else if (info.email.length == 0){
            toast.warn('Please enter the name')
        }
        else if (info.phone.length == 0){
            toast.warn('Please enter the name')
        }
        else if (info.confirmPassword.length == 0){
            toast.warn('Please enter the name')
        }
        else{
            const {name, email, password, phone} = info
            const result = await registerUser(name, email, password, phone)
            
            if (result['status']=='success'){
                toast.success('Successfully registered')
            
            navigate('/')
            }

        }
    }
    return (
        <div>
            
            <input type="text" onChange = {(e)=> setInfo({...info, name:e.target.value})} />
            <input type="email" onChange = {(e)=> setInfo({...info, email:e.target.value})} />
            <input type="password" onChange = {(e)=> setInfo({...info, password:e.target.value})} />
            <input type="password" onChange = {(e)=> setInfo({...info, confirmPassword:e.target.value})} />
            <input type="tel" onChange = {(e)=> setInfo({...info, phone:e.target.value})} />

        <button onClick = {onRegister}>Register</button>    
        </div>
        
    )

}
export default Register