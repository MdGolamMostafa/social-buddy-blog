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
      textAlign: 'left',
      float :'left',
      marginLeft:'5%',
      marginTop:'2%'
  },
});


const Post = (props) => {
    const classes = useStyles();

    const{id,title,body} = props.post;
   
    return (
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
              component="img"
              height = '222'
              image={`https://loremflickr.com/600/400?random=${id}`}
              title={title}
            />
          <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              {title.length > 30 ? title.substring(0, 30) + "..." : title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              {body.length > 80 ? body.substring(0, 80) + "..." : body}
              </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
            <Button variant="contained" color="primary">
              Share
            </Button>
        
            <Link  to={`/Post/${id}`}>
            <Button  variant="contained" color="primary">
                See more
            </Button>
                </Link>
        
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