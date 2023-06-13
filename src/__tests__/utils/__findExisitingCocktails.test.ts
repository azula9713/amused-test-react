import findExistingCocktails from "../../utils/FindExistingCocktails";
import testDrinks from "../../data/testJSONData";

describe("findExistingCocktails", () => {
  it("returns true if the cocktail is already in the array", () => {
    const cocktail = testDrinks[0];
    expect(findExistingCocktails(cocktail, testDrinks)).toBe(true);
  });

  it("returns false if the cocktail is not in the array", () => {
    const cocktail = {
      idDrink: "12345",
      strDrink: "Test Cocktail",
      strDrinkThumb:
        "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
      strCategory: "Ordinary Drink",
      strAlcoholic: "Alcoholic",
    };
    expect(findExistingCocktails(cocktail, testDrinks)).toBe(false);
  });
});
