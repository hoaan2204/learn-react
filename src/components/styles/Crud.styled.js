import styled from "styled-components";

export const StyledCrudPage = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 24px;
  background-color: #272727;
  border-radius: 12px;
  border: 1px solid #ccc;
  color: #fff;
  text-align: center;

  select {
    width: 120px;
    height: 40px;
    float: left;
    margin-bottom: 12px;
  }
  div button {
    color: white;
    float: right;
    background-color: green;
  }
`;
export const Table = styled.table`
  width: 100%;
  margin: 0 auto;
  align-items: center;
  border-collapse: collapse;
  color: #fff;

  tr {
    width: 100%;
    border: 1px solid white;
  }

  th {
    border: 1px solid white;
    width: 200px;
    height: 40px;
    color: blue;
  }

  td {
    border: 1px solid white;
  }

  button {
    display: block;
    margin-top: 12px;
  }
`;
