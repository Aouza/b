import React, { useState } from "react";
import { MdClearAll, MdClear } from "react-icons/md";

import Link from "next/link";
import Image from "next/image";
import { Container, Header } from "./styles";

import menu from "../../services/menu";
import useMedia from "../../hook/useMedia";

const HeaderComponent = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const mobile = useMedia("(max-width: 860px)");

  const openCloseMenuMobile = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <Header>
      <Container openMenu={openMenu}>
        <Image
          src="/static/images/logo-braseal.png"
          alt="Logo da Braseal"
          width="100%"
          height="100%"
        />
        <nav>
          <ul>
            {menu.map((item) => {
              return (
                <li key={item.name}>
                  <Link href={item.route}>
                    <a title={item.name}>{item.name}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
          {mobile && (
            <button onClick={openCloseMenuMobile}>
              {openMenu ? (
                <MdClear fill="#ffffff" />
              ) : (
                <MdClearAll fill="#0070ba" />
              )}
            </button>
          )}
        </nav>
      </Container>
    </Header>
  );
};

export default HeaderComponent;
