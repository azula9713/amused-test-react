import { FiTrash2 } from "react-icons/fi";

import { Drink } from "../../interfaces/Cocktail";
import { removeCocktailFromFavourites } from "../../store/features/favouritesSlice";
import { useAppDispatch } from "../../hooks/reduxHooks";
import {
  CocktailName,
  ImageThumbnail,
  MiniCocktailItemContainer,
} from "./MiniCocktailItemStyles";
import CommonIcon from "../Icon";

type MiniCocktailItemProps = {
  cocktail: Drink;
};

function MiniCocktailItem({ cocktail }: MiniCocktailItemProps) {
  const dispatch = useAppDispatch();

  return (
    <MiniCocktailItemContainer>
      <ImageThumbnail
        src={`${cocktail.strDrinkThumb}/preview`}
        alt={cocktail.strDrink}
      />
      <CocktailName>{cocktail.strDrink}</CocktailName>
      <CommonIcon
        icon={<FiTrash2 />}
        onClick={() => dispatch(removeCocktailFromFavourites(cocktail))}
        color="#7f0000"
        size="1.2rem"
        style={{
          cursor: "pointer",
          marginLeft: "auto",
        }}
      />
    </MiniCocktailItemContainer>
  );
}

export default MiniCocktailItem;
