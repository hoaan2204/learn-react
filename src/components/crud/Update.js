import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { StyledForm, Form, Button } from "../styles/Form.styled";

export default function UpdatePage() {
  const navigate = useNavigate();

  const [id, setID] = useState(null);
  const [title, setTitle] = useState("");
  const [video_url, setVideoURL] = useState("");

  const resourceAPI = `http://localhost:3000/videos/${id}`;

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setTitle(localStorage.getItem("Title"));
    setVideoURL(localStorage.getItem("Video URL"));
  }, []);

  const updateAPIData = () => {
    axios.put(resourceAPI, {
      title,
      video_url,
    });
    navigate("/crud");
  };

  return (
    <StyledForm>
      <Form>
        <h2>Update</h2>
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
        <Button type="submit" onClick={updateAPIData}>
          Update
        </Button>
      </Form>
    </StyledForm>
  );
}
