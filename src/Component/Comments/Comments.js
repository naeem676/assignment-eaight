import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Comments/Comments.css'

const Comments = () => {
    const {postId}= useParams();
    const [comments, setComments]= useState([]);
    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
    },[])
    return (
        <div>
        <h4>total comments : {comments.length}</h4>
        {
            comments.map(comment => <div className='comment'>
                <h4>Name:{comment.name}</h4>
                <h4>Email:{comment.email}</h4>
                <h4>body:{comment.body}</h4>
            </div>)
        }

            
        </div>
    );
};

export default  Comments;