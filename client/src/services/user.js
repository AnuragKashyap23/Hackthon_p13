import axios from 'axios'
import {config} from './config'

export async function registerUser( name, email, password, phone){
    try{
        const url = `${config.serverUrl}/user/register`

        const body = {name, email, password, phone}
        const res = await axios.post(url, body)
        return res.data
    }
    catch(ex){
        console.error('exception', ex)
    }
}

export async function loginUser(email, password){
    try{
        const url = `${config.serverUrl}/user/login`

        const body = {email, password}

        const res = await axios.post(url, body)
        return res.data
    }
    catch(ex){
        console.error('exception', ex)
    }
}