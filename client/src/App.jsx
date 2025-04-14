import React from 'react'
import { createContext} from 'react'
import { Path } from './../node_modules/@humanfs/core/src/path';
import { Route, Routes } from 'react-router-dom';
import {ToastContainer} from 'react-toastify'
import Register from './pages/register'
// import ind from './ind'

export const AuthContext = createContext()

function App() {

  return (
    <>
      <Routes>
        <Route
        path='/' element={<Register/>}
        />
      </Routes>
    </>
    
  )
}

export default App
