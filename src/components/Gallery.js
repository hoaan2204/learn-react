import { useState, useEffect } from "react";
import axios from "axios";

import { Container } from "./styles/Container.styled";

export default function Gallery() {
  const [datas, setDatas] = useState([]);
  const resourceAPI = `http://localhost:3000/images`;

  useEffect(() => {
    axios.get(resourceAPI).then((res) => {
      setDatas(res.data);
    });
  }, []);
  return (
    <Container>
        {datas.map((data) => (
          <img key={data.id} width={420} src={data.image_url} />
        ))}
    </Container>
  );
}
