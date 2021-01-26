import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  //Button,
  Grid,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  cardRoot: {
    maxWidth: '480',
  },
  media: {
    minHeight: '22vh',
  },
}));

const baseURL = 'https://youtube.googleapis.com/youtube/v3/playlistItems?'; // part=snippet&playlistId=UUfb1xoLtuLp5rOLEcJ2Y_YQ&maxResults=4&key=AIzaSyDejdMcPh15Ao7UN1YdkPVNOuvKIvGrzT4
const query = {
  part: 'snippet',
  playlistId: 'UUfb1xoLtuLp5rOLEcJ2Y_YQ',
  maxResults: '4',
  key: 'AIzaSyDejdMcPh15Ao7UN1YdkPVNOuvKIvGrzT4',
};

function YTNails() {
  //const [error, setError] = useState(null);
  //const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    /* Build url */
    let url = baseURL;
    for (let [key, value] of Object.entries(query)) {
      url = url + key + '=' + value + '&';
    }
    url = url.slice(0, -1);

    const options = {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(
        (result) => {
          //setIsLoaded(true);
          setItems(result.items);
          //console.log(result);
        },
        (error) => {
          //setIsLoaded(true);
          //setError(error);
        }
      )
  }, []);

  const classes = useStyles();

  return <div className={classes.root}>
  <Grid container spacing={3}>{
    items.map((video, idx) =>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6} xxl={6} key={idx}>
      {/*<a href={'https://www.youtube.com/watch?v=' + video.snippet.resourceId.videoId} target="_blank" rel="noreferrer">*/}
        <Card elevation={3} className={classes.cardRoot}>
          <a href={'https://www.youtube.com/watch?v=' + video.snippet.resourceId.videoId} target="_blank" rel="noreferrer">
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={video.snippet.thumbnails.high.url}
              title={video.snippet.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {video.snippet.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {video.snippet.description.split('========================================')[0]}
              </Typography>
            </CardContent>
          </CardActionArea>
          </a>
          <CardActions>
            {/*<Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>*/}
          </CardActions>
        </Card>
        {/*</a>*/}
      </Grid>)
  }</Grid>
  </div>;
}

export default YTNails;
