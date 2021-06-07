import React, { ReactElement } from "react";
import { Container } from "./styles";

interface MainContainerProps {
  children: ReactElement;
}

const MainContainer = ({ children }: MainContainerProps) => {
  return <Container>{children} </Container>;
};

export default MainContainer;
