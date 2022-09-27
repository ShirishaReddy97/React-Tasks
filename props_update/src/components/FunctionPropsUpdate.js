import React, { useState } from 'react'

function FunctionPropsUpdate(props) {
    const [name,setName]=useState({name:props.name})
    const handleClick=(childData)=>{
        setName({
            name:'shirisha'
        })
    }
  return (
    <div>
      <h2>Parent to Child:{name.name}</h2>
        <button onClick={handleClick}>Click</button>
        <h3>Child to Parent:{props.data.name}</h3>
        <button onClick={()=>props.data.changeName(name.name)}>Submit</button>
    </div>
  )
}

export default FunctionPropsUpdate
