import { useState } from "react";
import logo from "/apple-logo.svg";
import { styled } from "styled-components";
import cl from "./Header.module.css"

const HeaderContainer = styled.header`
  height: 50px;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fafafa;
`;

export default function Header() {
  const [now, setNow] = useState(new Date());

  setInterval(() => setNow(new Date(), 1000));

  return (
    <HeaderContainer>
      <img src={logo} alt="logo" className={cl.logo}/>
      <span>Время сейчас: {now.toLocaleTimeString()}</span>
    </HeaderContainer>
  );    
}
