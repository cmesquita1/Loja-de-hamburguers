import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  gap: 20px;
  width: 940px;
  flex-wrap: wrap;

  @media screen and (max-width: 762px) {
    overflow-x: scroll;
    flex-wrap: nowrap;
    /* width: 425px; */
  }
`;
