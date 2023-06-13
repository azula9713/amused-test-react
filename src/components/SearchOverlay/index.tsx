import { useEffect, useState } from "react";
import { RiSearch2Line } from "react-icons/ri";

import {
  SearchBoxWrapper,
  SearchInput,
  CustomSearchIcon,
} from "./SearchStyles";
import useDebounce from "../../hooks/useDebounce";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import SearchCocktails from "../../utils/SearchCocktails";
import { setFilteredCocktails } from "../../store/features/filteredCoktailSlice";
import { Drink } from "../../interfaces/Cocktail";
import CommonIcon from "../Icon";

function SearchOverlay() {
  const [searchText, setSearchtext] = useState("");
  const dispatch = useAppDispatch();
  const { cocktails } = useAppSelector((state) => state.cocktail);
  const debouncedSearchTerm = useDebounce(searchText, 500);

  useEffect(() => {
    let filteredCocktails: Drink[] = cocktails;

    if (debouncedSearchTerm) {
      filteredCocktails = SearchCocktails(cocktails, debouncedSearchTerm);
    }
    dispatch(setFilteredCocktails(filteredCocktails));
  }, [debouncedSearchTerm, dispatch, cocktails]);

  return (
    <SearchBoxWrapper>
      <CustomSearchIcon>
        <CommonIcon
          icon={<RiSearch2Line />}
          color="black"
          size="1.5rem"
          style={{
            marginRight: "0",
          }}
        />
      </CustomSearchIcon>
      <SearchInput
        type="search"
        placeholder="Search a cocktail..."
        value={searchText}
        onChange={(e) => setSearchtext(e.target.value)}
      />
    </SearchBoxWrapper>
  );
}

export default SearchOverlay;
