import React, { useState } from 'react'

function FormTable() {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[age,setAge]=useState("")
    const[salary,setSalary]=useState("")
    const[gender,setGender]=useState("")
    const[arr,setArr]=useState([]);
    const nameChange=(e)=>{
        setName(e.target.value);
    }
    const emailChange=(e)=>{
        setEmail(e.target.value);
    }
    const ageChange=(e)=>{
        setAge(e.target.value);
    }
    const salaryChange=(e)=>{
        setSalary(e.target.value);
    }
    const formSubmit=(e)=>{
       e.preventDefault(); 
    const obj={
        Name:name,
        Email:email,
        Age:age,
        Salary:salary
    }
    let arr1=[];
    arr1.push(...arr,obj);
    setArr(arr1)
    setName('')
    setEmail('')
    setAge('')
    setSalary('')
}
  return (
    <div>
    <div>
      <form onSubmit={formSubmit}>
      <label>Name:</label>
      <input type="text" value={name} onChange={nameChange}/><br/><br/>
      <label>Email:</label>
      <input type="email" value={email} onChange={emailChange}/><br/><br/>
      <label>Age:</label>
      <input type="number" value={age} onChange={ageChange}/><br/><br/>
      <label>Gender:</label>
      Female<input type="radio" name='gender' value={1} onChange={(e)=>setGender(e.target.value)}/>
      Male<input type="radio" name='gender'value={0} onChange={(e)=>setGender(e.target.value)}/><br/><br/>
      <label>Position:</label>
      <select>
        <option type="text" id="position">Front-End</option>
        <option type="text" id="position">Back-End</option>
        <option type="text" id="position">MiddleWare</option>
      </select><br/><br/>
      <label>Salary:</label>
      <input type="number" value={salary} onChange={salaryChange}/><br/><br/>
      <button type='submit'>Submit</button>
      </form>
    </div>
    <div>
            <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Position</th>
                    <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                {arr.map((data,i)=>(
                <tr key={i}>
                <td>{data.Name}</td>
                <td>{data.Email}</td>
                <td>{data.Age}</td>
                <td>{data.gender}</td>
                <td>{data.position}</td>
                <td>{data.Salary}</td>
            </tr>
            ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default FormTable
