import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from '../components/Create'
import Read from '../components/Read'
import Edit from '../components/Edit'
import NewComponent from '../components/NewComponent'

const Routing = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route exact path='/' element={<Read/>}/> 
        <Route exact path='/create' element={<Create/>}/>
        <Route exact path='/edit' element={<Edit/>}/>
        <Route exact path='/newComponent' element={<NewComponent/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routing

//Exact means exact url match