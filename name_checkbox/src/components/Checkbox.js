import React, { Component } from 'react'

class Checkbox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Name:{
                id:1,
                name:'shirisha'
            },
            Group:{
                id:2,
                name:'manisha'
            }
        }
    }
    groupChange=(e)=>{
        this.setState({[e.target.Group]:e.target.value})
    }
    nameChange=(e)=>{
        this.setState({[e.target.Name]:e.target.value})
    }
    checkboxSubmit=(e)=>{
        e.preventDefault();
    }
    render() {
       const {Group,Name}=this.state; 
        return (
            <div>
                <h1>Name Checkbox</h1>
                <div>
                    <form onSubmit={this.checkboxSubmit}>
                        <input type='checkbox' id='group' value={Group} onChange={this.groupChange} />Group
                        <input type='checkbox' id='name' value={Name} onChange={this.nameChange} />Name<br/>
                        <button>Submit</button>
                    </form>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Group</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{Group.name}</td>
                                <td>{Name.name}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Checkbox
