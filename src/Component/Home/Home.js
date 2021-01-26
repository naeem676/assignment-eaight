import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';




const Home = () => {
    const[post, setPost] = useState([]);
    useEffect(()=>{ 
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))

    },[] )
    return (
        <div>   

            <h1>total post :{post.length}</h1>
            {
                post.map(pt => <Post post={pt}></Post>)
            }
        </div>
    );
};

export default Home;