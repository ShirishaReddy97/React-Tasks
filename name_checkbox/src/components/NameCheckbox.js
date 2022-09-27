import React, { Component } from 'react'

class NameCheckbox extends Component {
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
              this.setState(prevState => {
                let Group = Object.assign({}, prevState.Group);
                Group.name = e.target.value
                return {Group} 
              })
    }
    nameChange=(e)=>{
        this.setState(prevState => {
            let Name = Object.assign({}, prevState.Name);
            Name.name = e.target.value
            return {Name} 
          })
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
                        <input type='checkbox' id='group' onChange={(e)=>this.groupChange(e)}  value="Group"/>Group
                        <input type='checkbox' id='name' onChange={(e)=>this.nameChange(e)} value="Name"/>Name<br/>
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

export default NameCheckbox
