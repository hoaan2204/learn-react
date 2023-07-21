import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { StyledForm, Form, Button } from "../styles/Form.styled";

export default function CreatePage() {
  const [title, setTitle] = useState("");
  const [video_url, setVideoURL] = useState("");

  const navigate = useNavigate();
  const handleSubmit = () => {
    axios.post(`http://localhost:3000/videos`, {
      title,
      video_url,
    });
    navigate("/crud");
  };

  return (
    <StyledForm>
      <Form>
        <h2>Create</h2>
        <hr />
        <label>Video name</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Video URL</label>
        <input
          value={video_url}
          onChange={(e) => setVideoURL(e.target.value)}
          required
        />
        <Button type="submit" onClick={handleSubmit}>
          Create
        </Button>
      </Form>
    </StyledForm>
  );
}
