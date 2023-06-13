import { useEffect } from "react";
import { FiRefreshCcw } from "react-icons/fi";

import CocktailCard from "../../components/CocktailCard";
import SearchOverlay from "../../components/SearchOverlay";
import LoadingAnimation from "../../components/LoadingAnimation";
import {
  CocktailGridWrapper,
  NoResultsContainer,
  RefreshButton,
  RefreshButtonContainer,
} from "./HomeStyles";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchRandomCocktails } from "../../store/features/cocktailSlice";

function Home() {
  const dispatch = useAppDispatch();

  const { cocktails, loading, error } = useAppSelector(
    (state) => state.cocktail
  );

  const { cocktails: filteredResults } = useAppSelector(
    (state) => state.filteredCocktails
  );

  useEffect(() => {
    if (cocktails.length === 0) {
      dispatch(fetchRandomCocktails(5));
    }
  }, [dispatch, cocktails.length]);

  if (loading) {
    return <LoadingAnimation />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <SearchOverlay />
      {filteredResults.length < 1 && (
        <NoResultsContainer>No results found</NoResultsContainer>
      )}
      <CocktailGridWrapper>
        {filteredResults.map((cocktail) => (
          <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
        ))}
      </CocktailGridWrapper>
      <RefreshButtonContainer>
        <RefreshButton onClick={() => dispatch(fetchRandomCocktails(5))}>
          Refresh
          <FiRefreshCcw
            style={{
              marginLeft: "0.5rem",
            }}
          />
        </RefreshButton>
      </RefreshButtonContainer>
    </>
  );
}

export default Home;
