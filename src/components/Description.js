import { StyledDescription } from './styles/Description.styled';

export default function Description({video}) {
return (
    <StyledDescription>
        <h2>Description</h2>
        <hr />
        <h5>{video.title}</h5>
        <p>Facebook: {}</p>
        <p>Instagram: {}</p>
    </StyledDescription>
);
}