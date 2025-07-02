import React from 'react'
import List from './List'

const ListItem = ({items,handleclick,handledelete}) => {
  return (

    <ul>
    {items.map((item1)=>
      <List
      item1={item1}
      key={item1.id}
      handleclick={handleclick}
      handledelete={handledelete}
      
      />
    )}

   </ul>
  )
}

export default ListItem