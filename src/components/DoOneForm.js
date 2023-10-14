import React, { useState } from 'react'

const DoOneForm = (props) => {
    const [value,setValue]=useState('');
    const handleSubmit=(e)=>{
e.preventDefault();
console.log(value)
    }
  return (
    <form className="doOne-form" onSubmit={handleSubmit}>
          <input className="input-box" type="text" placeholder='write here ...'value={value} onChange={(e)=>setValue(e.target.value)}/>
          <button className="submit" onClick={()=>{
            props.addList(value);
            setValue("");
          }}>+</button> 
        </form>
  )
}

export default DoOneForm;