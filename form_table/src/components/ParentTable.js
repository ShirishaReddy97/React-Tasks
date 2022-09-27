import React,{useState} from 'react'

function ParentTable(props) {
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
          {props.data1.map((e, i) => (
            <tr key={i}>
              <td>{i}</td>
              <td>{e.Name}</td>
              <td>{e.Email}</td>
              <td>{e.Age}</td>
              <td>{e.Salary}</td>
              <td>
                    <button onClick={()=>props.deleteForm(i)}>Delete</button>
                    </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ParentTable
