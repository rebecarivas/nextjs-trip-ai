"use client";
import styled from "styled-components";
import Image from "next/image";
import Logo from "../../../../public/images/logo.png";

function HeaderHome() {
  return (
    <Header>
      <Image src={Logo} width="200" alt="logo do trip.ai" />
    </Header>
  );
}

export default HeaderHome;

const Header = styled`
  padding: 20px 0;
  background-color: var(--roxo);


`;
