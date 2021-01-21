import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostBody = () => {
    const {postId} = useParams();
    const [body, setBody]= useState({});
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setBody(data))
    },[])
    return (
        <div>
        <p>{body.body}</p>
            
        </div>
    );
};

export default PostBody;