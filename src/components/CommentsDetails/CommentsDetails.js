import React from 'react';

const CommentsDetails = (props) => {
    const {email,body,name,id} = props.commentsDetails;
    return (
        <div>
            <img src={`https://loremflickr.com/600/400?random=${id}`} alt="picture"/>
            <h3>Name  : {name}</h3>
            <h4>Email : {email}</h4>
            <h6>Comments: {body}</h6>
        </div>
    );
};

export default CommentsDetails;