import React, { useState } from 'react';
import FormChild from './FormChild';
function TableParent(props){
    const[value,setValue]=useState([])
    const click=(e)=>{
        setValue(e);
    }
    const deleteForm=(index,e)=>{
        setValue(value.map((val,i)=>val[i] !== index))
    }
return(
    <div>
         <FormChild data={click}/>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Salary</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {value.map((e,i)=>(
                    <tr key={i}>
                    <td>{i+1}</td>
                    <td>{e.Name}</td>
                    <td>{e.Email}</td>
                    <td>{e.Age}</td>
                    <td>{e.Salary}</td>
                    <td>
                        <button onClick={()=>deleteForm(i)}>Delete</button>
                        {/* <button onClick={()=>updateForm}>Update</button> */}
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
)
}
export default TableParent