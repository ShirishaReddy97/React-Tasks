import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function TableFormPopup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")
    const [salary, setSalary] = useState("")
    const [arr, setArr] = useState([]);
    const [index1,setIndex]=useState()
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
        arr.map((val,indx1) => {
            if (index1 === indx1) {
                val.Name = name;
                val.Email = email;
                val.Age = age;
                val.Salary = salary
            }
        })
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
        setIndex(index)
        arr.map((detail, ind) => {
            setShow(true)
            if (index === ind) {
                setName(detail.Name)
                setEmail(detail.Email)
                setAge(detail.Age)
                setSalary(detail.Salary)
            }
        })
    }
    const deleteForm = (index) => {
        setArr(arr.filter((val, i) => i !== index))
    }

    return (
        <div>
            <div>
                <form onSubmit={formSubmit}>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={nameChange} /><br /><br />
                    <label>Email:</label>
                    <input type="email" value={email} onChange={emailChange} /><br /><br />
                    <label>Age:</label>
                    <input type="number" value={age} onChange={ageChange} /><br /><br />
                    <label>Salary:</label>
                    <input type="number" value={salary} onChange={salaryChange} /><br /><br />
                    <button type='submit'>Submit</button>
                </form>
            </div>
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
                        {arr.map((data, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{data.Name}</td>
                                <td>{data.Email}</td>
                                <td>{data.Age}</td>
                                <td>{data.Salary}</td>
                                <td>
                                    <button className='btn-btn danger' onClick={() => deleteForm(index)}>Delete</button>
                                    <button className='btn-btn primary' onClick={() => updateForm(index)}>Update</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body><form>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={nameChange} /><br /><br />
                    <label>Email:</label>
                    <input type="email" value={email} onChange={emailChange} /><br /><br />
                    <label>Age:</label>
                    <input type="number" value={age} onChange={ageChange} /><br /><br />
                    <label>Salary:</label>
                    <input type="number" value={salary} onChange={salaryChange} /><br /><br />
                </form></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default TableFormPopup
