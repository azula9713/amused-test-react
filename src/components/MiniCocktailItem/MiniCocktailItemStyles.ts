import styled from "styled-components";

const MiniCocktailItemContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1rem;
  cursor: pointer;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid gray;
`;

const ImageThumbnail = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 5px;
  margin-right: 1rem;
`;

const CocktailName = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  margin: 0;
  color: #000;
`;

export { MiniCocktailItemContainer, ImageThumbnail, CocktailName };
