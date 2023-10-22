import { useState, useEffect } from "react";
import axios from "axios";

import Player from "./Player";
import VideoGroup from "./VideoGroup";
import CardVideo from "./CardVideo";
import Description from "./Description";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
export default function Watch() {
  const [video, setVideo] = useState({});
  const [currentVideoId, setCurrentVideoId] = useState("");
  const [recommendVideos, setRecommendVideos] = useState([]);

  const recommendAPI = `http://localhost:3000/api/v1/videos`;
  const currentPlayingAPI = `http://localhost:3000/api/v1/videos/${currentVideoId}`;

  useEffect(() => {
    axios.get(currentPlayingAPI).then((res) => {
      setVideo(res.data);
    });
  }, [currentVideoId]);

  useEffect(() => {
    axios.get(recommendAPI).then((res) => {
      setRecommendVideos(res.data);
      firstVideo();
    });
  }, []);

  const firstVideo = () => {
    setVideo(localStorage.getItem("video"));
    console.log(localStorage.getItem("video"));
  };

  const handleChangeVideo = (recommendVideo) => {
    setCurrentVideoId(recommendVideo._id);
  };
  return (
    <Container>
      <Flex>
        <Player video={video} />
        <Description video={video} />
        <VideoGroup>
          {recommendVideos.map((recommendVideo, index) => (
            <CardVideo key={index} data={recommendVideo}>
              <button onClick={() => handleChangeVideo(recommendVideo)}>
                Click here
              </button>
            </CardVideo>
          ))}
        </VideoGroup>
      </Flex>
    </Container>
  );
}
