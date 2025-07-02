import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'
const Additem = ({newitems,setNewItems,handleadditem}) => {
const inputRef=useRef()
  return (
    <form className='addForm' onSubmit={handleadditem}>
    <input
      
        autoFocus
        ref={inputRef}
        type="text"
        id="additem"
        placeholder='Add Item'
        required
        value={newitems}
        onChange={(e)=>setNewItems(e.target.value)}
    />
    
    <button
    type="submit"
   onClick={()=>inputRef.current.focus()}
    >
      <FaPlus/>
     
    </button>

    </form>
  )
}

export default Additem