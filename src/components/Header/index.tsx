import { useState } from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";

import { HeaderWrapper, IconsWrapper, SiteTitle } from "./HeaderStyles";
import CommonIcon from "../Icon";
import { useAppSelector } from "../../hooks/reduxHooks";
import FavouriteSideBar from "../FavouriteSideBar";

function Header() {
  const [isFavouriteOpen, setIsFavouriteOpen] = useState(false);

  const { favouriteCocktails } = useAppSelector((state) => state.favourites);

  return (
    <HeaderWrapper>
      <SiteTitle>The Cocktail DB</SiteTitle>
      <IconsWrapper>
        <CommonIcon
          icon={<MdOutlineFavoriteBorder />}
          count={favouriteCocktails.length}
          onClick={() => setIsFavouriteOpen(true)}
        />
      </IconsWrapper>

      <FavouriteSideBar
        isOpen={isFavouriteOpen}
        setIsOpen={setIsFavouriteOpen}
        favouriteCocktails={favouriteCocktails}
      />
    </HeaderWrapper>
  );
}

export default Header;
