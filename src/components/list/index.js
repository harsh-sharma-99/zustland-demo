import React from 'react'
import { RiDeleteBinLine } from "react-icons/ri";

const List = ({list, setList}) => {

  const handleDelete = (name) => {
    setList(prev => prev?.filter(filterName => filterName !== name))
  }

  return (
    <div>  
      {list?.map((name, idx) => {
        return (
        <div key = {idx}>
          <span>{name}  < RiDeleteBinLine onClick = {() => handleDelete(name)} /></span>
        </div>
        )
      })}
    </div>
  )
}

export default List