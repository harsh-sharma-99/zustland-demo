import React from 'react'

const List = ({list}) => {

  return (
    <div> 
      {list?.map((name, idx) => {
        return (
        <div key = {idx}>
          {name}
        </div>
        )
      })}
    </div>
  )
}

export default List