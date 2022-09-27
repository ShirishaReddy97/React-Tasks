import React, { useState } from 'react';
import ParentTable from './ParentTable';
import TableParent from './TableParent';
function ChildForm(props) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")
    const [salary, setSalary] = useState("")
    const [arr, setArr] = useState([])
    const[value,setValue]=useState([])
    const deleteForm=(index,e)=>{
    setValue(value.map((val,i)=>i !== index))
}
    const nameChange = (e) => {
        setName(e.target.value);
    }
    const emailChange = (e) => {
        setEmail(e.target.value);
    }
    const ageChange = (e) => {
        setAge(e.target.value);
    }
    const salaryChange = (e) => {
        setSalary(e.target.value);
    }
    const formSubmit = (e) => {
        e.preventDefault()
        const obj = {
            Name:name,
            Email:email,
            Age:age,
            Salary:salary
        }
        let arr1 = [];
        arr1.push(...arr,obj)
        setArr(arr1)
        setName('')
        setEmail('')
        setAge('')
        setSalary('')
        props.data(arr1)
    }
    return (
        <div>
            <form onSubmit={formSubmit}>
                <label>Name:</label>
                <input type="text" value={name} onChange={nameChange}/><br /><br />
                <label>Email:</label>
                <input type="email" value={email} onChange={emailChange}/><br /><br />
                <label>Age:</label>
                <input type="number" value={age} onChange={ageChange}/><br /><br />
                <label>Salary:</label>
                <input type="number" value={salary} onChange={salaryChange}/><br /><br />
                <button type='submit'>Submit</button>
            </form>
            <ParentTable data1={arr} deleteForm={deleteForm}/>
        </div>
    )

}
export default ChildForm