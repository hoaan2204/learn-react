import ReactPlayer from "react-player";

import { StyledCardVideo } from "./styles/CardVideo.styled";

export default function CardVideo({ children, data }) {
  return (
      <StyledCardVideo>
      <ReactPlayer
        url={data.videoURL}
        style={{borderRadius: "12px"}}
        width="100%"
        height="80%"
        preload="auto"
      />
      <h5>
        {data.title}
      </h5>
      <p>{data.createdAt}</p>
      { children}
      </StyledCardVideo>
  );
}
