import React from 'react'
import { Link, NavLink } from 'react-router'
import '../components/Header.css'
const Header = () => {
  return (
    <header className=' px-10 gap-5 flex justify-between py-3 m-2'>
      <Link to="/" className='font-bold text-xl'>BG-Remove-AI</Link>

      <div className='bg-blue-100  px-10 rounded-full py-2'>
        <nav className='flex'>
          <ul className=' flex gap-5'>
            <NavLink    className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              } to="/">Home</NavLink>
            <NavLink    className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              } to="/buy">Buy</NavLink>
            <NavLink    className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              } to="/result">Result</NavLink>
          </ul>
        </nav>        
      </div>

      <div></div>
    </header>
  )
}

export default Header