import styled from "styled-components";

export const Container = styled.div`
  max-width: 75rem;
  margin: 0 auto;

  > h2 {
    text-align: center;
    color: var(--main-dark);
  }
`;

export const ContactForm = styled.form`
  margin: 2rem 0;

  > button {
    padding: 0.9rem 4rem;
    background-color: var(--main-dark);
    color: var(--white);
    border-radius: 0.3rem;
    font-weight: bold;
    font-size: 0.8rem;
    letter-spacing: 0.06rem;
  }
`;

export const WrapperInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  > span {
    display: flex;
    align-items: center;
    color: var(--main-dark);
    svg {
      margin-right: 10px;
      font-size: 18px;
    }
  }
`;

export const WrapperIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  padding: 2rem;
  font-size: 30px;
  color: var(--main-dark);
`;

export const HeaderForm = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;

  > input {
    padding: 1rem;
    border-radius: 0.3rem;
    border: 0;
    background-color: var(--main-border);
  }

  > label {
    font-size: 14px;
    position: absolute;
    top: 14px;
    left: 20px;
    color: var(--main-text);
    transition: top 0.4s, left 0.4s;
  }

  &:focus-within label {
    top: -26px;
    left: 4px;
    font-weight: bold;
    font-size: 0.7rem;
  }

  > textarea {
    height: 10rem;
    padding: 1rem;
    border-radius: 0.3rem;
    border: 0;
    background-color: var(--main-border);
  }
`;
