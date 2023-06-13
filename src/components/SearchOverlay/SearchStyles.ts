import styled from "styled-components";

const SearchBoxWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
  padding-top: 1rem;
`;

const SearchInput = styled.input`
  width: 50%;
  height: 50px;
  border-radius: 15px;
  border: none;
  outline: none;
  padding: 0 1rem;
  font-size: 1.2rem;
  color: #000;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  &::-webkit-search-cancel-button {
    margin-left: 0.5rem;
  }

  //change placeholder color and font size and font-family
  &::placeholder {
    color: gray;
    font-size: 1rem;
    font-family: "Dancing Script";
  }

  @media (max-width: 500px) {
    width: 75%;
    padding-left: 0rem;
  }

  @media (max-width: 300px) {
    width: 70%;
  }
`;

const CustomSearchIcon = styled.div`
  height: 50px;
  border-radius: 15px;
  outline: none;
  padding: 0 1rem 0 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  //flipping the icon
  transform: scaleX(-1);
`;

export { SearchBoxWrapper, SearchInput, CustomSearchIcon };
