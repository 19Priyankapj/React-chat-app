import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/login'
import Register from './Pages/Register'
import Pnf from './Pages/Pnf'
import { ToastContainer } from 'react-toastify'
import './App.css'
function App() {
  return (
    <BrowserRouter>
    <ToastContainer autoclose={4000} position={'bottom-right'}/>
        <Routes>

          {/*as a children */}
          {/*<Route path={`/`} element={
            <Protected>
            <Home/>
            </Protected>
          } />*/}

          <Route element={<protected/>}>
                <Route path={`/`} element={<Home/>}/>
            </Route>
            <Route path={`/login`} element={<Login/>}/>
            <Route path={`/register`} element={<Register/>}/>
            <Route path={`/*`} element={<Pnf/>}/>


        </Routes>
     </BrowserRouter>
  )
}

export default App