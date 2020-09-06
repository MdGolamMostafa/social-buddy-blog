import React from 'react';
import CommentsDetails from '../CommentsDetails/CommentsDetails';

const Comment = (props) => {
    const {comments} = props;
    console.log(comments);
    return (
       
            <div>
                
                {   
                    comments.map((commentsDetails) =>
                                    (<CommentsDetails  commentsDetails={commentsDetails} >
                                    </CommentsDetails>)            
                                )
                }
            </div>
    );
};
export default Comment;