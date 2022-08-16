import styled from "styled-components";

export const HeaderDiv = styled.header`
  background: #f5f5f5;
  padding: 10px 40px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  margin-bottom: 32px;

  .searchBox button {
    background: #27ae60;
    border-radius: 8px;
    color: #fff;
    padding: 12px 20px;
    border: transparent;
    position: absolute;
    right: 50px;
    top: 20px;
    transition: background 0.1s linear;

    &:hover {
      background: #93d7af;
      cursor: pointer;
    }
  }

  .searchBox input {
    padding: 20px 15px;
    width: 400px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    &::placeholder {
      color: #e0e0e0;
    }
  }

  @media screen and (max-width: 425px) {
    flex-direction: column;

    img {
      width: 260px;
    }

    .searchBox button {
      right: -5px;
      top: 60px;
    }
  }
`;
