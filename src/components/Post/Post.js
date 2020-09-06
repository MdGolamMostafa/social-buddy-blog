import React from 'react';
import {Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


const Post = (props) => {
    const classes = useStyles();


    const{id,title,body} = props.post;
    // const postStyle ={
    //     border:'1px solid gray',
    //     margin:'22px',
    //     padding:'22px',
    //     borderRadius:'22px'
    // }
    return (
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={`https://loremflickr.com/600/400?random=${id}`}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {title.length > 25 ? title.substring(0, 25) + "..." : title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {body.length > 80 ? body.substring(0, 80) + "..." : body}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
          <Link to={`/Post/${id}`}><button>See more</button></Link>
          </Button>
        </CardActions>
      </Card>

        // <div style={postStyle}>
        //     {/* <h2>User Id : {id}</h2> */}
        //     {/* <h1>Title : {title}</h1> */}
        //     <h1>{title.length > 25 ? title.substring(0, 25) + "..." : title}</h1>
        //     <h5>{body.length > 50 ? body.substring(0, 50) + "..." : body}</h5>
        //     <h3><Link to={`/Post/${id}`}><button>See more</button></Link> </h3>
        // </div>
    );
};

export default Post;