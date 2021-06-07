import styled, { css } from "styled-components";

interface OpenMenuProps {
  openMenu: boolean;
}

export const Header = styled.header`
  padding: 1rem 2rem;
  border-bottom: 1px solid var(--main-border);
`;

export const Container = styled.div<OpenMenuProps>`
  max-width: 75rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

    nav {
      ul {
        li {
          display: inline-block;
          font-size: 0;
          a {
            display: inline-block;
            text-align: center;
            font-size: 0.9rem;
            padding: 1rem;
            color: var(--dark-gray);

            &:hover {
              font-weight: bold;
            }

            &:hover {
              &::after {
                width: 100%;
              }
            }

            &::before {
              display: block;
              content: attr(title);
              font-weight: bold;
              height: 0;
              overflow: hidden;
              visibility: hidden;
            }

            &::after {
              content: "";
              width: 0%;
              height: 2px;
              background-color: var(--main-blue);
              display: block;
              border-radius: 10px;
              transition: width 0.4s;
            }
          }
        }

        @media (max-width: 860px) {
          position: absolute;
          width: 0;
          height: 0;
          top: 0;
          left: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;

          li {
            display: block;

            height: 0;
            width: 0;
            z-index: 1;

            a {
            }
          }

          ${({ openMenu }) =>
            openMenu &&
            css`
              width: 100%;
              height: 100%;
              background: rgba(0, 0, 0, 0.9);
              li {
                height: auto;
                width: auto;

                a {
                  font-size: 1.5rem;
                  color: var(--white);
                }
              }
            `}
        }
      }
    }
  }

  button {
    position: relative;

    > svg {
      font-size: 2.4rem;
    }
  
`;
