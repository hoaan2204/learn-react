import { useState, useEffect } from "react";
import axios from "axios";

import Player from "./Player";
import VideoBar from "./VideoBar";
import CardVideo from "./CardVideo";
import Description from "./Description";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
export default function Watch() {
  const [videoId, setVideoId] = useState(1);
  const [video, setVideo] = useState({});
  const [datas, setDatas] = useState([]);

  const playingAPI = `http://localhost:3000/videos/${videoId}`;
  const resourceAPI = `http://localhost:3000/videos`;

  useEffect(() => {
    axios.get(playingAPI).then((res) => {
      setVideo(res.data);
    });
  }, [videoId]);

  useEffect(() => {
    axios.get(resourceAPI).then((res) => {
      setDatas(res.data);
    });
  }, [resourceAPI]);
  return (
    <Container>
      <Flex>
        <Player video={video} />
        <Description video={video} />
        <VideoBar>
          {datas.map((data, index) => (
            <CardVideo
              key={index}
              data={data}
              onClick={() => setVideoId(data.id)}
            >
              <button onClick={() => setVideoId(data.id)}>Click here</button>
            </CardVideo>
          ))}
        </VideoBar>
      </Flex>
    </Container>
  );
}
