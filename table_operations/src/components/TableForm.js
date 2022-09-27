import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function TableForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")
    const [salary, setSalary] = useState("")
    const [arr, setArr] = useState([])
    const[update,setUpdate]=useState()
    const[updateline,setUpdateLine]=useState()
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
        e.preventDefault();
        const obj = {
            Name: name,
            Email: email,
            Age: age,
            Salary: salary
        }
        let arr1 = [];
        arr1.push(...arr, obj);
        setArr(arr1)
        setName('')
        setEmail('')
        setAge('')
        setSalary('')
    }
    const updateForm = (index) => {
        arr.map((detail, ind) => {
            if (index === ind) {
                setName(detail.Name)
                setEmail(detail.Email)
                setAge(detail.Age)
                setSalary(detail.Salary)
            }
        })
    }
    const handleupdate = (index) => {
        let data = !update
        setUpdate({ update: data })
        setUpdateLine({ updateline: index })

    }
    const handleok = (email, index) => {
    setArr({
            arr: arr.map(data => {
                if (data.email === email) {
                    data.name = name
                }
                return data
            })
        })
        let data = !update
        setUpdate({ update: data })
        setUpdateLine({ updateline: index })
    }
    const deleteForm = (index) => {
        setArr(arr.filter((val, i) => i !== index))
    }
    return (
        <div>
            <div>
                <Form onSubmit={formSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={name} onChange={nameChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={email} onChange={emailChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" value={age} onChange={ageChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Salary</Form.Label>
                        <Form.Control type="number" value={salary} onChange={salaryChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </div>
            <div>
                <Table striped bordered hover size="sm">
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
                        {arr.map((data, index) => (
                            <tr key={index}>
                                <td>{index+1}</td>
                                    <td>{update && index === updateline ? <input type="text" value={newname} onChange={handlenameupdate}></input> : (<td>{data.name}</td>)}</td>
                                    <td>{update && index === updateline ? <input type="email" value={newemail} onChange={handleemailupdate}></input> : (<td>{data.email}</td>)}</td>
                                    <td>{update && index ===updateline ? <input type="number" value={newage} onChange={handleageupdate}></input> : (<td>{data.age}</td>)}</td>
                                    <td>{update && index === updateline ? <input type="number" value={newsalary} onChange={handlesalaryupdate}></input> : (<td>{data.salary}</td>)}</td>
                                    <td><button onClick={() => handledelete(index)}>delete</button></td>
                                    {update && index === updateline ?
                                        <td><button onClick={() => handleok(index)}>ok</button></td> :
                                        <td><button onClick={() => handleupdate(index)}>update</button></td>}
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            
        </div>
    )
}

export default TableForm
