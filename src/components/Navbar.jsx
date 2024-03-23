import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Chat time</span>
      <div className='user'>
        <img src="https://cdn.pixabay.com/photo/2017/03/27/15/11/action-2179304_1280.jpg" alt="" />
        <span>Priyan</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar