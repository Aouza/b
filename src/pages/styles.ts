import styled from "styled-components";

export const Container = styled.main`
  background-color: var(--main-background);
  padding: 0 2rem;
`;

export const Hero = styled.section`
  max-width: 75rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  padding: 2rem;

  div {
    h1 {
      color: var(--main-dark);
      font-size: 2.5rem;
      line-height: 2.8rem;
    }

    h2 {
      color: var(--main-trelleborg-color);
    }

    p {
      color: var(--main-text);
    }
  }

  img {
    border: 10px solid #eaeaea !important;
  }
`;

export const CallTrelleborg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:before,
    &:after {
      content: "";
      display: inline-block;
      width: 20%;
      height: 4px;
      background-color: var(--main-trelleborg-color);
      position: relative;
      vertical-align: middle;
      margin: 2rem;
      border-radius: 10px;
    }

    img {
      width: 150px;
    }
  }
`;

export const ImageSliderContent = styled.section`
  max-width: 75rem;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

export const SegmentContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    border-radius: 10px;
    box-shadow: 13px 15px 17px rgb(0 0 0 / 10%);
    max-width: 600px;
    width: 100%;
  }

  > div {
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    gap: 0.6rem;

    > button {
      padding: 0.4rem;
      border-radius: 100px;
      font-size: 0.8rem;
      color: var(--main-dark);
      letter-spacing: 0.1rem;
      text-decoration: underline;
      transition: color 0.4s;

      &:hover {
        color: var(--main-blue);
      }
    }
  }
`;

export const WrapperSlider = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;

  > h2 {
    font-size: 16px;
    color: var(--main-dark);
    text-transform: uppercase;
  }
`;

export const ContainerBrands = styled(Container);

export const Brands = styled.section`
  max-width: 75rem;
  margin: 0 auto;
  padding: 4rem 2rem;

  h2 {
    text-align: center;
    color: var(--main-dark);
    text-transform: uppercase;
  }

  > div {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 2rem;
    justify-content: center;
    align-items: center;

    img {
      width: 100px;
      filter: grayscale(1);
      transition: filter 0.4s;
      &:hover {
        filter: grayscale(0.1);
      }
    }
  }
`;
