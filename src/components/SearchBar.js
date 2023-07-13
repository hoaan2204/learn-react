import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { StyledSearchBar, StyledSearchHint, StyledFaSearch } from "./styles/SearchBar.styled";

export default function searchBar() {
  const [searchInput, setSearchInput] = useState("");

  const [datas, setDatas] = useState([]);

  const resourceAPI = "https://charming-bat-wig.cyclic.app/images";
  useEffect(() => {
    fetch(resourceAPI)
      .then((res) => res.json())
      .then((datas) => setDatas(datas));
  }, []);
  const images = datas;

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    images.filter((image) => {
      return image.title.match(searchInput);
    });
  }

  return (
    <div>
      <StyledSearchBar>
        <input
          type="search"
          placeholder="Type to search"
          onChange={handleChange}
          value={searchInput}
        />
        <StyledFaSearch />

        <StyledSearchHint>
          {datas.map((data) => (
            <li key={data.id}>{data.title}</li>
          ))}
        </StyledSearchHint>
      </StyledSearchBar>
    </div>
  );
}
