import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comments';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
      textAlign: 'left',
      marginLeft:'2%',
      marginTop:'1%',
      marginRight:'1%'
  },

});

const PostDetail = () => {
    const classes = useStyles();

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
      const styleComment = {
          textAlign : 'center'
      }
    
    return (
        <div>

        <Card className={classes.root}>
            <CardActionArea>
            <CardMedia
                component="img"
                height = '333'
                image={`https://loremflickr.com/600/400?random=${postId}`}
                title={pId.title}
                />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                {pId.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {pId.body}
                </Typography>
            </CardContent>
            </CardActionArea>
        
        </Card>
            <div style={styleComment}>
                <br/>
                <h2>{comments.length} comments </h2>
            </div>
            
            <hr/>
                <Comment comments={comments}></Comment>
        </div>
    );
};

export default PostDetail;