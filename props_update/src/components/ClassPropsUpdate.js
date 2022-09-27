import React, { Component } from 'react'
class ClassPropsUpdate extends Component {
    constructor(props) {
      super(props)
      this.state = {
         name:this.props.name
      }
    }
    handleClick=()=>{
        this.setState({
            name:'shirisha'
        })
    }
  render() {
    return (
      <div>
        <h2>Parent to Child:{this.state.name}</h2>
        <button onClick={this.handleClick}>Click</button>
        <h3>Child to Parent:{this.props.data.name}</h3>
        <button onClick={()=>this.props.data.changeName(this.state.name)}>Submit</button>
      </div>
    )
  }
}

export default ClassPropsUpdate
