import styled from "styled-components";

export const MainLayout = styled.div`
  padding: 5rem;
  @media screen and (max-width: 650px) {
    padding: 3rem;
  }
  @media screen and (max-width: 600px) {
    padding: 2rem 1rem;
  }
  /* @media screen and (max-width: 510px) {
    padding: 0.4rem;
  } */
`;

export const InnerLayout = styled.div`
  padding: 5rem 0;
`;
