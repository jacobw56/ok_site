import React, { useState, useEffect } from 'react';
import { Anchor, Card, Image, Row, Col } from 'antd';

const { Meta } = Card;
const baseURL = 'https://youtube.googleapis.com/youtube/v3/playlistItems?'; // part=snippet&playlistId=UUfb1xoLtuLp5rOLEcJ2Y_YQ&maxResults=4&key=AIzaSyDejdMcPh15Ao7UN1YdkPVNOuvKIvGrzT4
const query = {
  part: 'snippet',
  playlistId: 'UUfb1xoLtuLp5rOLEcJ2Y_YQ',
  maxResults: '4',
  key: 'AIzaSyDejdMcPh15Ao7UN1YdkPVNOuvKIvGrzT4',
};

function YTNails() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
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
          setIsLoaded(true);
          setItems(result.items);
          //console.log(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []);

  return <Row>{
    items.map((video, idx) =>
      <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6} key={idx}>
      <a href={'https://www.youtube.com/watch?v=' + video.snippet.resourceId.videoId} target="_blank">
        <Card
          hoverable
          style={{padding: '10px'}}
          cover={<Image alt='youtube_thumb' preview={false} src={video.snippet.thumbnails.high.url} />}
        >
          <Meta title={video.snippet.title} />
        </Card>
        </a>
      </Col>)
  }</Row>;
}

export default YTNails;
