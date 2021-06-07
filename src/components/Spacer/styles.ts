import styled from "styled-components";

interface ContainerProps {
  gap: number;
}

export const Container = styled.div<ContainerProps>`
  height: ${({ gap }) => `${gap}px`};
`;
