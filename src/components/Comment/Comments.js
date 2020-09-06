import React from 'react';
import CommentsDetails from '../CommentsDetails/CommentsDetails';
import { List } from '@material-ui/core';



const Comment = (props) => {
    const {comments} = props;
    console.log(comments);
    return (
       
            <List>
                
                {   
                    comments.map((commentsDetails) =>
                            (<CommentsDetails  commentsDetails={commentsDetails} >

                        </CommentsDetails>)            
                    )
                }
            
            </List>
    );
};
export default Comment;