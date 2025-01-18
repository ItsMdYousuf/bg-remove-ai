import React from 'react'
import { Link } from 'react-router'

const Home = () => {
  return (
    <div className='min-h-screen'>
      <div>
        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt ullam natus quidem, ipsam cumque obcaecati?</p>

        <Link className='mt-10 inline-block bg-green-400 px-10 py-2 rounded-full text-green-900 font-bold' to="/edit">Get Start</Link>
      </div>
    </div>
  )
}

export default Home