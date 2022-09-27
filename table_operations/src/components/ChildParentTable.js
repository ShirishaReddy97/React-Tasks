import React from 'react'

function ChildParentTable(props) {
    const buttonFormDelete=(index)=>{
        props.passData(index);
    }
  return (
    <div>
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
                {props.data1.map((info,index)=>(
                <tr key={index}>
                <td>{index + 1}</td>
                <td>{info.Name}</td>
                <td>{info.Email}</td>
                <td>{info.Age}</td>
                <td>{info.Salary}</td>
                <td>
                    <button onClick={buttonFormDelete(index)}>Delete</button>
                </td>
            </tr>
            ))}
                </tbody>
            </table>
        </div>
  )
}

export default ChildParentTable
