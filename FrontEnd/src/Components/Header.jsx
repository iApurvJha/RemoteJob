import React from 'react'
// import remoteImage from '../public/Remote.png';

function Header() {
  return (
    <header className='heading'>
        <span><h1>Remote</h1></span>
        <span><img className='Remote-png' src='/Remote.png' alt='Remote'></img></span>
        <span><h1>Jobs</h1></span>
      </header>
  )
}

export default Header
