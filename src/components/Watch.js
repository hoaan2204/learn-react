import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import Player from "./Player";
import VideoBar from "./VideoBar";
import Description from "./Description";
import CardVideo from "./CardVideo";
import { useState, useEffect } from "react";
export default function Watch() {
  const [videoId, setVideoId] = useState(1);
  const [video, setVideo] = useState({});
  const [datas, setDatas] = useState([]);

  const playingAPI = `https://charming-bat-wig.cyclic.app/${videoId}`;
  const resourceAPI = `https://charming-bat-wig.cyclic.app/videos`;

  useEffect(() => {
    fetch(playingAPI)
      .then((res) => res.json())
      .then((video) => setVideo(video));
  }, [videoId]);

  useEffect(() => {
    fetch(resourceAPI)
      .then((res) => res.json())
      .then((datas) => setDatas(datas));
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
