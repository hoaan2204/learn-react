import ReactPlayer from "react-player";

import { StyledPlayer, StyledReactPlayer } from "./styles/Player.styled";
export default function Player({ video }) {
  return (
    <StyledPlayer>
      <StyledReactPlayer
        url={video.videoURL}
        width="100%"
        height="100%"
        playing={true}
        muted
        controls
      />
    </StyledPlayer>
  );
}
