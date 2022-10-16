import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Footer = () => {
  const { bgs } = useSelector((state) => state.themeColor);

  const FooterPage = styled.section`
    width: 100%;
    height: 4.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
  `;
  return (
    <FooterPage className={` ${bgs}`}>
      <div>
        <p className="container">rights reseverd Yennic 2022</p>
      </div>
    </FooterPage>
  );
};

export default Footer;
