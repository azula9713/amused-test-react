import { useEffect, useRef } from "react";
import { BsTrashFill } from "react-icons/bs";
import { MdClose } from "react-icons/md";

import {
  FavouriteSidebarWrapper,
  FavouritesContentContainer,
  NoFavouritesText,
  RemoveAllActionContainer,
  RemoveAllText,
  SidebarContainer,
  SidebarHeader,
  SidebarOverlay,
  SidebarTitle,
} from "./FavouriteSidebarStyles";
import { Drink } from "../../interfaces/Cocktail";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { resetFavourites } from "../../store/features/favouritesSlice";
import CommonIcon from "../Icon";
import MiniCocktailItem from "../MiniCocktailItem";

type FavouriteSideBarProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  favouriteCocktails: Drink[];
};

function FavouriteSideBar({
  isOpen,
  setIsOpen,
  favouriteCocktails,
}: FavouriteSideBarProps) {
  const sideBarRef = useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sideBarRef.current &&
        !sideBarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sideBarRef, setIsOpen]);

  return (
    <SidebarOverlay $isOpen={isOpen}>
      <FavouriteSidebarWrapper ref={sideBarRef}>
        <SidebarContainer>
          <SidebarHeader>
            <SidebarTitle>Favourites</SidebarTitle>
            <CommonIcon
              icon={<MdClose />}
              onClick={() => setIsOpen(false)}
              color="black"
            />
          </SidebarHeader>
          <FavouritesContentContainer>
            {favouriteCocktails.map((cocktail) => (
              <MiniCocktailItem key={cocktail.idDrink} cocktail={cocktail} />
            ))}

            {favouriteCocktails.length < 1 && (
              <NoFavouritesText>No favourites added yet</NoFavouritesText>
            )}
          </FavouritesContentContainer>
        </SidebarContainer>
        {favouriteCocktails.length > 1 && (
          <RemoveAllActionContainer onClick={() => dispatch(resetFavourites())}>
            <RemoveAllText>Remove all</RemoveAllText>
            <BsTrashFill
              style={{
                marginLeft: "0.5rem",
              }}
            />
          </RemoveAllActionContainer>
        )}
      </FavouriteSidebarWrapper>
    </SidebarOverlay>
  );
}

export default FavouriteSideBar;
