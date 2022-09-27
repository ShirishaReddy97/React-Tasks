import React, { useState,useEffect } from 'react';
import axios from 'axios';
function PostsTable() {
    const [posts,setPosts]=useState([]);
    useEffect(() => {
        fetchCard();
    }, [])
    const fetchCard=()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.data)
        .then((data)=>{
            console.log(data)
            setPosts(data);
        })
        .catch(err=>{
            console.log(err);
        })
    }
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
            {posts.map((post1,i)=>(
                <tr key={i}>
                    <td>{post1.userId}</td>
                    <td>{post1.id}</td>
                    <td>{post1.title}</td>
                    <td>{post1.body}</td>
                </tr>
            ))}
            </tbody>
            
      </table>
    </div>
  )
}

export default PostsTable
