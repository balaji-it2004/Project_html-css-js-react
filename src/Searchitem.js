import React from 'react'

const Searchitem = ({search,searchItem}) => {
  return (
    <form className='searchForm' onSubmit={(e)=>e.preventDefault}> 

    <input
    type="text"
    id="search"
    role="searchbox"
    placeholder='Search Item'
    value={search}
    onChange={(e)=>searchItem(e.target.value)}
/>
    </form>
  )
}

export default Searchitem