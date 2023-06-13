import { useEffect, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";

import { Drink } from "../../interfaces/Cocktail";
import {
  ArrowIconContainer,
  CocktailCardImage,
  CocktailCardWrapper,
  CocktailCategory,
  CocktailTitle,
  CocktailInfoCard,
  TitleContainer,
  IconContainer,
  BlurWrapper,
} from "./CocktailCardStyles";
import CommonIcon from "../Icon";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import {
  addCocktailToFavourites,
  removeCocktailFromFavourites,
} from "../../store/features/favouritesSlice";
import findExistingCocktails from "../../utils/FindExistingCocktails";

type Props = {
  cocktail: Drink;
};

function CocktailCard({ cocktail }: Props) {
  const [infoSectionOpen, setInfoSectionOpen] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const dispatch = useAppDispatch();
  const { favouriteCocktails } = useAppSelector((state) => state.favourites);

  function handleImageLoad() {
    setIsImageLoaded(true);
  }

  useEffect(() => {
    const isAlreadyFavourite = findExistingCocktails(
      cocktail,
      favouriteCocktails
    );
    setIsFavourite(isAlreadyFavourite);
  }, [cocktail, favouriteCocktails]);

  return (
    <CocktailCardWrapper>
      <BlurWrapper
        $backgroundImage={`${cocktail.strDrinkThumb}/preview`}
        $isLoaded={isImageLoaded}
      >
        <CocktailCardImage
          src={cocktail.strDrinkThumb}
          alt={cocktail.strDrink}
          loading="lazy"
          onLoad={handleImageLoad}
        />
      </BlurWrapper>
      <CocktailInfoCard
        $infoSectionOpen={infoSectionOpen}
        onMouseEnter={() => setInfoSectionOpen(true)}
        onMouseLeave={() => setInfoSectionOpen(false)}
      >
        <TitleContainer>
          <CocktailTitle
            $infoSectionOpen={infoSectionOpen}
            title={cocktail.strDrink}
          >
            {cocktail.strDrink}
          </CocktailTitle>
          <IconContainer>
            <CommonIcon
              icon={isFavourite ? <MdFavorite /> : <MdOutlineFavoriteBorder />}
              color={
                findExistingCocktails(cocktail, favouriteCocktails)
                  ? "red"
                  : "white"
              }
              size="1.2rem"
              onClick={() => {
                if (!isFavourite) {
                  dispatch(addCocktailToFavourites(cocktail));
                } else {
                  dispatch(removeCocktailFromFavourites(cocktail));
                }
              }}
            />
            <ArrowIconContainer>
              <CommonIcon
                icon={infoSectionOpen ? <FiChevronDown /> : <FiChevronUp />}
                color="white"
                size="1.2rem"
                onClick={() => setInfoSectionOpen(!infoSectionOpen)}
              />
            </ArrowIconContainer>
          </IconContainer>
        </TitleContainer>
        <CocktailCategory $infoSectionOpen={infoSectionOpen}>
          {cocktail.strCategory} ({cocktail.strAlcoholic})
        </CocktailCategory>
      </CocktailInfoCard>
    </CocktailCardWrapper>
  );
}

export default CocktailCard;
