import React from 'react'

const Search = () => {
  return (
    <div className='flex border border-2 border-blue-300 rounded-full bg-black bg-transparent text-white'>
        <img src="/Search.svg" className='invert px-1 py-1'/>
        <input type="text" className='focus:outline-none pr-3'/>
    </div>
  )
}

export default Search
