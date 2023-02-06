import React, { useState } from 'react'
import "./styles.css"

const Form = (props) => {
    const {list, setList} = props;
    const [name, setName] = useState("");
    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleEnter = () => {
      
      if(name === "") return alert("Please enter title")
      setList(prevList =>[...prevList,name] );
      setName("")
    }

  return (
    <div>
        <h1>Enter Framework:</h1>
        <input 
          className = "inputContainer" 
          type      = "text"
          value     = {name}
          onChange  = {(e) => handleChange(e)}
      />

    <button 
      className = "button" 
      onClick = {handleEnter}
    >
      Enter
      </button>
    </div>
  )
}

export default Form