import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  text-align: center;
  color: white;
`;

function Footer() {
  return (
    <FooterDiv className="footer">
      <p>Copyright 2020</p>
    </FooterDiv>
  );
}

export default Footer;
