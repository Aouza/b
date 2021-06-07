import styled from "styled-components";

export const Container = styled.footer`
  background-color: var(--main-blue);
  height: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    max-width: 75rem;
    margin: 0 auto;

    p {
      color: #ffffff;
      font-size: 0.8rem;
    }
  }
`;
