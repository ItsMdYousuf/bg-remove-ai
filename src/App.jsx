import React from 'react'
import { Route, Routes } from 'react-router'
import BuyCreate from './pages/Buy'
import Edit from './pages/Edit'
import Home from './pages/Home'
import Result from './pages/Result'
 

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/result' element={<Result />} />
        <Route path='/buy' element={<BuyCreate />} />
        <Route path='/edit' element={<Edit />} />
      </Routes>
    </div>
  )
}

export default App