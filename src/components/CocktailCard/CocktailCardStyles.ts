import styled from "styled-components";

const CocktailCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 0px 10px 20px 10px;
  padding: 10px;
  border: 1px solid #ffc0cb;
  border-radius: 15px;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
  background-color: #fff;
  transition: all 0.3s ease-in-out;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
  }
`;

const CocktailCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  aspect-ratio: 1/1;
  border-radius: 10px;
  filter: blur(0);
`;

const BlurWrapper = styled.div<{
  $backgroundImage: string;
  $isLoaded: boolean;
}>`
  background-image: ${({ $backgroundImage, $isLoaded }) =>
    $isLoaded ? "none" : `url(${$backgroundImage})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: ${({ $isLoaded }) => ($isLoaded ? "blur(0)" : "blur(10px)")};
  transition: filter 0.3s ease-in-out;
  width: 100%;
  height: 300px;
  max-height: 400px;
  border-radius: 10px;
`;

const CocktailInfoCard = styled.div<{ $infoSectionOpen: boolean }>`
  margin: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 0;
  left: 0;
  width: calc(100% - 40px);
  border-radius: 0 0 10px 10px;
  padding: 10px;
  cursor: pointer;
  height: ${(props) => (props.$infoSectionOpen ? "120px" : "30px")};
  transition: height 0.3s;
  color: #fff;

  &:hover {
    height: 120px;
  }
`;

const CocktailTitle = styled.h3<{ $infoSectionOpen: boolean }>`
  margin: 0;
  text-align: left;
  font-size: 1.4rem;
  font-weight: 700;
  font-family: "Dancing Script", cursive;
  white-space: ${(props) => (props.$infoSectionOpen ? "none" : "nowrap")};
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CocktailCategory = styled.p<{ $infoSectionOpen: boolean }>`
  display: ${(props) => (props.$infoSectionOpen ? "block" : "none")};
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ArrowIconContainer = styled.div`
  display: none;
  margin: 0 auto;
  padding: 0;
  line-height: 0;

  @media (pointer: coarse) {
    display: block;
  }
`;

export {
  CocktailCardWrapper,
  CocktailCardImage,
  CocktailInfoCard,
  CocktailTitle,
  CocktailCategory,
  TitleContainer,
  IconContainer,
  ArrowIconContainer,
  BlurWrapper,
};
