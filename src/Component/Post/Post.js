import React from 'react';
import '../Post/Post.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

const Post = (props) => {
  const {id, title}= props.post
    const classes = useStyles();
    return (
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image=""
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {id}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/posts/${id}`}>
        <Button size="small" color="primary">
          Learn More
        </Button>
        </Link>
        
      </CardActions>
    </Card>
    );
};

export default Post;