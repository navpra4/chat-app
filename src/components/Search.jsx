import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type="text" placeholder='find a user'/>
      </div>
      <div className='userChat'>
        <img src="https://cdn.pixabay.com/photo/2017/03/27/15/11/action-2179304_1280.jpg" alt="" />
        <div className='userChatInfo'>
          <span>Monk</span>
        </div>     
      </div>

    </div>
  )
}

export default Search