import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { StyledForm, Form, Button } from "../styles/Form.styled";

export default function CreatePage() {
  const [id, setId] = useState();
  const [title, setTitle] = useState("");
  const [video_url, setVideoURL] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { id, name, video_url };

    fetch("http://localhost:3000/videos", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        alert("Saved successfully.");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <StyledForm>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <h2>Create</h2>
        <hr/>
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
        <Button type="submit">Create</Button>
      </Form>
    </StyledForm>
  );
}
