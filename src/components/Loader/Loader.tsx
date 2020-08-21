import React from "react";
import styled from "styled-components";

const LoaderContainer = styled.div`
  font-size: 90px;
  display: inline-block;
  position: relative;
  width: 130px;
  height: 130px;
  overflow: hidden;
  margin: 72px auto;
  
 div {
  position: absolute;
  border: 4px solid var(--primary);
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
 div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 60px;
    left: 60px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 120px;
    height: 120px;
    opacity: 0;
  }
}

`;

const Loader : React.FC =  () => (
    <LoaderContainer><div /><div /></LoaderContainer>
);

export default Loader;
