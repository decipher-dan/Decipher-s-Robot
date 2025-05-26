import React from 'react'

const SearchBox = ({ changeHandler }) => {
  return (
    <>
        <input 
            className='pa3 ba b--green bg-lightest-gray '
            type="search"  
            placeholder='search for your favorite robot'
            onChange={changeHandler }
        />
    </>
  )
}

export default SearchBox