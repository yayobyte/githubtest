import styled from "styled-components";

const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  
  @media only screen and (max-width: 768px) {
    max-width: 640px;
    width: 100%;
  }
  
  @media only screen and (max-width: 480px) {
    max-width: 400px;
    width: 100%;
  }

`;

export const UserInfo = styled.div`
  width: 150px;
  margin: 0 auto;
  color: var(--text);
  
  @media only screen and (max-width: 768px) {
    margin: 0 0 0 5px;
  }
`;

export default CardsContainer;