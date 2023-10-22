import { useEffect, useState } from "react";
import axios from "axios";

import VideoGroup from "./VideoGroup";
import CardVideo from "./CardVideo";
import { Button } from "../components/styles/Button.styled";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { Link } from "react-router-dom";

export default function Home() {
  const videoAPI = `http://localhost:3000/api/v1/videos/`;
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getAllVideos();
  }, []);

  const getAllVideos = async () => {
    try {
      const res = await axios.get(videoAPI);
      return setVideos(await res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const goToVideoPage = (video) => {
    localStorage.setItem("video", video);
  }
  return (
    <Container>
      <Flex>
        <VideoGroup>
          {videos.map((video, index) => (
            <Link to="/video">
            <CardVideo key={index} data={video}>
            </CardVideo>
              </Link>
          ))}
        </VideoGroup>
      </Flex>
    </Container>
  );
}
