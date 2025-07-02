import React from 'react'
import ListItem from './ListItem'
const Para = ({items,handleclick,handledelete}) => {

  

    
  return (
    <>
   {(items.length)?(
    <ListItem
    items={items}
    handleclick={handleclick}
    handledelete={handledelete}
    />
   ):<p>your page is empty</p>
  }
     </>
  )
}

export default Para