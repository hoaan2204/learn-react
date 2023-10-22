import { useState, useEffect } from "react";
import { StyledDescription } from "./styles/Description.styled";

export default function Description({ video }) {
  // const descriptionAPI = `http://localhost:3000/api/v1/videos/${videoId}`;

  // const [videoDescription, setVideoDescription] = useState({});

  // useEffect(() => {
  //   getData();
  // }, []);

  // const getData = async () => {
  //   try {
  //     const response = await axios.get(descriptionAPI);
  //     console.log(response.data);
  //     return setVideoDescription(await response.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  return (
    <StyledDescription>
      <h2>Description</h2>
      <hr />
      <h5>{video.title}</h5>
      <p>Facebook: {video.facebookURL}</p>
      <p>Instagram: {video.instagramURL}</p>
      <p>Tiktok: {video.tiktokURL}</p>
    </StyledDescription>
  );
}
