import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/github.svg";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  margin: auto;
  padding: 15px;
  
  div.logo {
    background-image: url(${logo});
    background-repeat: no-repeat;
    width: 40px;
    height: 40px;
    margin-right: 15px;
  }
  
  div.description {
    line-height: 1.3;
    div.title {
      font-size: 1.17em;
      font-weight: 600;
    }
    div.subtitle {
      color: gray;
      font-size: 0.948em;
    }
  }
  
  @media only screen and (max-width: 768px) {
    margin: 15px;
    padding: 0;
    width: 100%;
  }
`;

const Header : React.FC = () => (
    <HeaderContainer>
        <div className="logo"/>
        <div className="description">
            <div className="title">GitHub Searcher</div>
            <div className="subtitle">Search users or repositories below</div>
        </div>
    </HeaderContainer>
);

export default Header;
