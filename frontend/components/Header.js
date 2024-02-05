import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  align-items: flex-end;

  h1 {
    color: ${(pr) => pr.theme.secondaryColor};
    letter-spacing: 0.5rem;
    font-size: 6rem;
    padding-right: 2rem;
    padding-left: 1rem;
  }

  h3 {
    color: ${(pr) => pr.theme.tertiaryColor};
    letter-spacing: 0.16rem;
    font-size: 1.5rem;
    font-weight: 400;
    padding-bottom: 30px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <h1>APOD</h1>
      <h3>Astronomy Picture of the Day</h3>
    </StyledHeader>
  );
}
export default Header;
