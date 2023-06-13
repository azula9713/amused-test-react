import styled from "styled-components";

const CocktailGridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  padding: 20px 0;
  overflow: hidden;
`;

const RefreshButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

const RefreshButton = styled.button`
  padding: 0.5rem 1.4rem;
  border: none;
  border-radius: 5px;
  background-color: #ff7b7b;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat";

  &:hover {
    background-color: #ffb6ba;
  }
`;

const NoResultsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  font-size: 1.2rem;
  font-weight: 700;
  color: #ff7b7b;
`;

export {
  CocktailGridWrapper,
  RefreshButtonContainer,
  RefreshButton,
  NoResultsContainer,
};
