import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const PostBody = () => {
    
    const classes = useStyles();
    const {postId} = useParams();
    const [body, setBody]= useState({});
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setBody(data))
    },[])
    return (
        <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            
          </Typography>
          <Typography variant="h5" component="h2">
            
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
          
          </Typography>
          <Typography variant="body2" component="p">
            {body.body}
            <br />
            
          </Typography>
        </CardContent>
        <CardActions>
        <Link to={`/${postId}/comments`}>
        <Button size="small" color="primary">
          Comments
        </Button>
        </Link>
        </CardActions>
      </Card>
    );
};

export default PostBody;