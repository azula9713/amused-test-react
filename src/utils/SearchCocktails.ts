import { Drink } from "../interfaces/Cocktail";

function SearchCocktails(cocktails: Drink[], searchTerm: string): Drink[] {
  if (searchTerm === "") return cocktails;

  return cocktails.filter((cocktail) => {
    return cocktail.strDrink.toLowerCase().includes(searchTerm.toLowerCase());
  });
}

export default SearchCocktails;
