import React, { Component } from 'react'
import ClassPropsUpdate from './components/ClassPropsUpdate'
import FunctionPropsUpdate from './components/FunctionPropsUpdate'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       name:'Ayilreddy Gary'
    }
  }
  changeName(item){
    this.setState({name:item})
  }
  render() {
    return (
      <div>
        {/* <ClassPropsUpdate data={
        {
          name:this.state.name,changeName:this.changeName.bind(this)
        }} name={this.state.name}/> */}
        <FunctionPropsUpdate data={
        {
          name:this.state.name,changeName:this.changeName.bind(this)
        }} name={this.state.name}/>
      </div>
    )
  }
}
export default App


// import React, { useState } from 'react'
// import ClassPropsUpdate from './components/ClassPropsUpdate'
// import FunctionPropsUpdate from './components/FunctionPropsUpdate'

// function App() {
//   const [name, setName] = useState('Ayilreddy Gary')
//   const changeName = (item) => {
//     setName({ name: item })
//   }
//   return (
//     <div>
//       <ClassPropsUpdate data={
//  {
// name:name.name,changeName:changeName.bind()
// }} name={name}/>
//       {/* <FunctionPropsUpdate data={
//         {
//           name: name.name, changeName:changeName.bind()
//         }} name={name} /> */}
//     </div>
//   )
// }

// export default App

