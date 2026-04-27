import React, { useState,useEffect } from 'react'
import axios from "axios"
const Feed = () => {
    const [posts,setPosts]=useState([
        {
                _id:"1",
                image:"https://images.unsplash.com/photo-1619441207978-3d326c46e2c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2NlbmVyeXxlbnwwfHwwfHx8MA%3D%3D",
                caption:"beauty"
        }
    ])
    useEffect(()=>{
axios.get("http://localhost:3000/posts")
.then((res)=>{
    console.log(res.data);
    setPosts(res.data.posts);
        
})
    },[])
  return (
    <section className='feed-section'> 
{
    posts.length>0?(posts.map((post)=>(
        <div key={post._id} className='post-card' >
<img src={post.image} alt={post.caption} />
<p>{post.caption}</p>
        </div>
    ))):(
        <h1>No post available</h1>
    )
}
    </section>
  )
}

export default Feed