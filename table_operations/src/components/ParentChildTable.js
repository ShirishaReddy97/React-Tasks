import React from 'react'

function ParentChildTable(props) {
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
                {props.data.map((data,index)=>(
                <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.Name}</td>
                <td>{data.Email}</td>
                <td>{data.Age}</td>
                <td>{data.Salary}</td>
                <td>
                    <button onClick={()=>props.deleteForm(index)}>Delete</button>
                </td>
            </tr>
            ))}
                </tbody>
            </table>
        </div>
  )
}

export default ParentChildTable
