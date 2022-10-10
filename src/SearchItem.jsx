import React from 'react'

const SearchItem = ({seachItem, setSeachItem}) => {
  return (
    <form className='searchForm' onSubmit={ e => e.preventDefault()}>
        <input 
            type="text"
            id='search'
            role='searchbox'
            placeholder='Search item'
            value={seachItem}
            onChange={e => setSeachItem(e.target.value)}
        />
    </form>
  )
}

export default SearchItem