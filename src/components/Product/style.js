import styled from "styled-components";

export const Card = styled.div`
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  width: 300px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .productImage {
    background: #f5f5f5;
    width: 100%;
    border: 5px;

    img {
      width: 162px;
    }
  }

  .productDetail {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    margin-left: 20px;

    small {
      color: #828282;
    }

    p {
      color: #27ae60;
      font-weight: 600;
    }

    button {
      background: #27ae60;
      border: 2px solid transparent;
      border-radius: 8px;
      color: #fff;
      padding: 10px 20px;
      margin-bottom: 35px;
      font-weight: 600;
      transition: background 0.1s linear;

      &:hover {
        background: #93d7af;
        cursor: pointer;
      }
    }
  }

  @media screen and (max-width: 762px) {
    .productImage {
      img {
        width: 300px;
      }
    }
  }
`;
