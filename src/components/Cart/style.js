import styled from "styled-components";

export const CartDiv = styled.div`
  width: 400px;

  .cartTitle {
    padding: 10px;
    background: #27ae60;
    color: #fff;
    font-weight: 700;
    text-align: start;
    border-radius: 5px 5px 0px 0px;

    h3 {
      margin-left: 30px;
    }
  }

  .cartItems {
    background: #f5f5f5;
    height: 158px;
    border-radius: 0px 0px 5px 5px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 400px;

    h3 {
      margin-top: 0;
    }
  }

  .cartItemsWithContent {
    height: 300px;
    background: #f5f5f5;
    overflow-y: auto;
  }

  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    img {
      width: 70px;
      background: #e0e0e0;
      border-radius: 5px;
      margin-left: 10px;
    }

    small {
      color: #828282;
    }

    button {
      margin-right: 10px;
      background: none;
      border: none;
      color: #bdbdbd;

      & {
        cursor: pointer;
      }
    }

    .itemStyle {
      display: flex;
      gap: 10px;
      justify-content: start;
      align-items: center;
    }

    .itemInfo {
      display: flex;
      flex-direction: column;
      align-items: start;
    }
  }
`;

export const TotalPrice = styled.div`
  background: #f5f5f5;
  border-radius: 0px 0px 5px 5px;
  border-top: 2px solid #e0e0e0;
  display: flex;
  padding: 0 10px;
  flex-direction: column;

  .totalPriceValue {
    display: flex;
    justify-content: space-between;

    p {
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: #333333;
    }

    p + p {
      color: #828282;
    }
  }

  button {
    height: 60px;
    background: #e0e0e0;
    border-radius: 8px;
    border: 2px solid #e0e0e0;
    margin-bottom: 20px;
    color: #828282;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    & {
      cursor: pointer;
    }
  }
`;
