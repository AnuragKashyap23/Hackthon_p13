import React from 'react'
import { useState,createContext} from 'react'
import { Path } from './../node_modules/@humanfs/core/src/path';
import { Route, Routes } from 'react-router-dom';
import {ToastContainer} from 'react-toastify'

export const AuthContext = createContext()

function App() {
  const [user, setUser] = useState(null)

  return (
    <AuthContext.Provider value = {{user,setUser}}>
      <Routes>
        <Route
          Path = '/'
          element = {<login/>} 
        />
        <Route
          path = 'register'
          element = {<register/>}
        />

      </Routes>
    </AuthContext.Provider>
    
  )
}

export default App
