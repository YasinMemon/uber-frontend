import React from 'react'
import { Link } from 'react-router'

function Start() {
  return (
    <div>
      <img src="lights.jpg" alt="" />
      <div>
        <h1 className='text-xl mt-4 ml-4 font-bold' >Get Started with Uber</h1>
        <Link to={'/user-login'} className='flex justify-center bg-black text-white mx-6 py-2 text-lg font-light rounded-md mt-5' >Continue</Link>
      </div>
    </div>
  )
}

export default Start
