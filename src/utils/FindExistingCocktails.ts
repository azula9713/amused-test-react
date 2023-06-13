import { Drink } from "../interfaces/Cocktail";

function findExistingCocktails(cocktail: Drink, cocktailArray: Drink[]) {
  return cocktailArray.some((item) => item.idDrink === cocktail.idDrink);
}

export default findExistingCocktails;
