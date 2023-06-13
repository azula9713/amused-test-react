import styled from "styled-components";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #ffb6ba;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 30%;
  margin-right: 1rem;
`;

const SiteTitle = styled.h1`
  font-size: 1.5rem;
  margin-left: 5rem;
  color: #000;
  font-weight: bold;
  width: max-content;
  cursor: pointer;
  font-family: "Dancing Script";
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de;

  @media (max-width: 768px) {
    margin-left: 2rem;
  }

  @media (max-width: 300px) {
    font-size: 1.2rem;
    text-align: left;
    margin-left: 1rem;
  }
`;

export { HeaderWrapper, IconsWrapper, SiteTitle };
