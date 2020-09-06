import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comments';

const PostDetail = () => {
    const {postId} = useParams();
    const [pId ,setPostId] = useState({});
    
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(response => response.json())
        .then(data=> setPostId(data))
    },[])

  const [comments,setComments] = useState([]);

    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        fetch(url)
        .then(res =>res.json())
        .then(data => setComments(data));
      },[])
    return (
        <div>
            
            {/* <h1>This is a post details.</h1> */}
            {/* <h3>User Id: {pId.id}</h3>
            <h1>Title: {pId.title}</h1> */}
             {/* <h3>User Id: {pId.id}</h3> */}
            <h1> {pId.title}</h1>
            <p>{pId.body}</p>
            <br/>
            <hr/>
            <h1>Comments: {comments.length}</h1>
            <Comment comments={comments}></Comment>
        </div>
    );
};

export default PostDetail;