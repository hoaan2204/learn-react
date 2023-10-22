import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import axios from "axios";

import { StyledCrudPage, Table } from "../styles/Crud.styled";
import { Button, DeleteButton } from "../styles/Button.styled";

export default function List() {
  const [type, setType] = useState("videos");
  const [datas, setDatas] = useState([]);

  const resourceAPI = `http://localhost:3000/api/v1/${type}`;
  useEffect(() => {
    axios.get(resourceAPI).then((response) => {
      setDatas(response.data);
    });
  }, [type]);

  const setData = (data) => {
    let { _id, title, videoURL } = data;
    localStorage.setItem("ID", _id);
    localStorage.setItem("Title", title);
    localStorage.setItem("Video URL", videoURL);
  };

  const getData = () => {
    axios.get(resourceAPI).then((res) => {
      setDatas(res.data);
    });
  };

  const goToUpdatePage = (data) => {
    setData(data);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/api/v1/videos/${id}`).then(() => {
      getData();
    });
  };
  return (
    <StyledCrudPage>
      <h1>CRUD</h1>
      <div>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="videos">Video</option>
          <option value="images">Image</option>
        </select>
        <Link to="/crud/create">
          <Button>Create</Button>
        </Link>
      </div>
      <Table>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>URL</th>
          <th>Action</th>
        </tr>
        {datas.map((data) => (
          <tr key={data._id}>
            <td>{data._id}</td>
            <td>{data.title}</td>
            {type === "videos" ? (
              <td>
                <ReactPlayer
                  url={data.videoURL}
                  style={{ padding: "6px" }}
                  width="60%"
                  controls
                />
              </td>
            ) : (
              <td>
                <img width={420} src={data.imageURL} />
              </td>
            )}
            <td>
              <Link to="/crud/update">
                <Button onClick={() => goToUpdatePage(data)}>Update</Button>
              </Link>
              <DeleteButton onClick={() => handleDelete(data._id)}>
                Delete
              </DeleteButton>
            </td>
          </tr>
        ))}
      </Table>
    </StyledCrudPage>
  );
}
