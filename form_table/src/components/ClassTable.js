import React from "react";
class ClassTable extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            age:'',
            salary:'',
            newname: "",
            newemail:'',
            newage:'',
            newsalary:'',
            arr: [],
            update: false,
            updateline: ""
        }
    }
    handlename = (e) => {
        this.setState({name: e.target.value })
    }    
    handleemail = (e) => {
        this.setState({email: e.target.value })
    }
    handleage=(e)=>{
        this.setState({age:e.target.value})
    }
    handlesalary=(e)=>{
        this.setState({salary:e.target.value})
    }
    handlesubmit = (e) => {
        e.preventDefault();
        let data = {
            name: this.state.name,
            email: this.state.email,
            age:this.state.age,
            salary:this.state.salary
        }
        this.state.arr.push(data)
        let data1 = this.state.arr
        console.log(this.state.arr)
        this.setState({ arr: data1 })
    }
    handledelete = (index) => {
        console.log(index)
        this.state.arr.splice(index, 1)
        this.setState({ arr: this.state.arr })
    }
    handlenameupdate = (e) => {
        this.setState({newname: e.target.value });
    }
    handleemailupdate = (e) => {
        this.setState({newemail: e.target.value });
    }
    handleageupdate = (e) => {
        this.setState({newage: e.target.value });
    }
    handlesalaryupdate = (e) => {
        this.setState({newsalary: e.target.value });
    }
    handleupdate = (index) => {
        let data = !this.state.update
        this.setState({ update: data })
        this.setState({ updateline: index })
    }
    handleok = (index) => {
        this.setState({
            arr: this.state.arr.map((data,ind) => {
                if (ind === index) {
                    data.name = this.state.newname
                    data.email = this.state.newemail
                    data.age = this.state.newage
                    data.salary = this.state.newsalary
                }
                return data
            })
        })
        let data = !this.state.update
        this.setState({ update: data })
        this.setState({ updateline: index })
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handlesubmit}>
                    <div>
                        <label>Name</label>
                        <input type="text" value={this.state.name} onChange={this.handlename} />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" value={this.state.email} onChange={this.handleemail} />
                    </div>
                    <div>
                        <label>Age</label>
                        <input type="number" value={this.state.age} onChange={this.handleage} />
                    </div>
                    <div>
                        <label>Salary</label>
                        <input type="number" value={this.state.salary} onChange={this.handlesalary} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Age</th>
                                <th>Salary</th>
                            </tr>
                        </tbody>
                        {this.state.arr.map((data, index) => (
                            <tbody key={index}>
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{this.state.update && index === this.state.updateline ? <input type="text" value={this.state.newname} onChange={this.handlenameupdate}></input> : (<td>{data.name}</td>)}</td>
                                    <td>{this.state.update && index === this.state.updateline ? <input type="email" value={this.state.newemail} onChange={this.handleemailupdate}></input> : (<td>{data.email}</td>)}</td>
                                    <td>{this.state.update && index === this.state.updateline ? <input type="number" value={this.state.newage} onChange={this.handleageupdate}></input> : (<td>{data.age}</td>)}</td>
                                    <td>{this.state.update && index === this.state.updateline ? <input type="number" value={this.state.newsalary} onChange={this.handlesalaryupdate}></input> : (<td>{data.salary}</td>)}</td>
                                    <td><button onClick={() => this.handledelete(index)}>delete</button></td>
                                    {this.state.update && index === this.state.updateline ?
                                        <td><button onClick={() => this.handleok(index)}>ok</button></td> :
                                        <td><button onClick={() => this.handleupdate(index)}>update</button></td>}
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
            </div>
        )
    }
}
export default ClassTable