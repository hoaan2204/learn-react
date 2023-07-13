import ReactPlayer from "react-player";

import { StyledCardVideo, StyledTitle } from "./styles/CardVideo.styled";

export default function CardVideo({ children, data }) {
  return (
    <div>
      <StyledCardVideo>
      <ReactPlayer
        url={data.video_url}
        style={{padding: "6px"}}
        width="100%"
        height="80%"
      />
      <h5>
        {data.title}
      </h5>
      { children}
      </StyledCardVideo>
    </div>
  );
}
