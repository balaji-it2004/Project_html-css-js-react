import React from 'react'
import {FaTrashAlt} from "react-icons/fa";
const List = ({item1,handleclick,handledelete}) => {
  return (
    <li className='item' key={item1.id}>
          <input
           type="checkbox"
           onChange={()=>handleclick(item1.id)}
           checked={item1.checked}
           />
           <label style= {(item1.checked)?{textDecoration:"line-through"}:null} onDoubleClick={()=>handleclick(item1.id) }>
            {item1.item}</label>
           <FaTrashAlt
            role="button"
            tabIndex="0"
            onClick={()=>handledelete(item1.id)}
           />
          </li>
          
  )
}

export default List