import React, { Component } from 'react'
import axios from 'axios'
class ClassPosts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        console.log(res)
        this.setState({
          posts: res
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>UserId</th>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post) => (
              <tr>
                <td>{post.UserId}</td>
                <td>{post.Id}</td>
                <td>{post.Title}</td>
                <td>{post.Body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default ClassPosts
