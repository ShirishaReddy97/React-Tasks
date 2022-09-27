import React, { useEffect, useState } from 'react'
import axios from 'axios';
function ButtonPosts() {
    const [posts,setPosts]=useState([]);
    const [obj,setObj]=useState({})
    useEffect(()=>{
        fetchCard()
    },[])
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
   const buttonClick=(e)=>{
    posts.map((data,i)=>{
        if(data.id==e){
            console.log(data);
            setObj(data)
        }
   })
    // e.preventDefault()
    // console.log("Hi");
    }
  return (
    <div>
        {posts.map((post,i)=>(
          <button onClick={(e)=>buttonClick(post.id)}>{post.id}</button>  
        ))}
        <p><h1>Id:</h1>{obj.id}</p>
        <p><h1>UserId:</h1>{obj.userId}</p>
        <p><h1>Title:</h1>{obj.title}</p>
        <p><h1>Body:</h1>{obj.body}</p>
    </div>
  )
}

export default ButtonPosts
