import SearchCocktails from "../../utils/SearchCocktails";
import testDrinks from "../../data/testJSONData";

describe("SearchCocktails", () => {
  it("should return all cocktails when search term is empty", () => {
    const searchTerm = "";
    const result = SearchCocktails(testDrinks, searchTerm);
    expect(result).toEqual(testDrinks);
  });

  it("should return filtered cocktails when search term matches drink names", () => {
    const searchTerm = "Blue";
    const expected = [testDrinks[1]];
    const result = SearchCocktails(testDrinks, searchTerm);
    expect(result).toEqual(expected);
  });

  it("should return filtered cocktails regardless of case sensitivity", () => {
    const searchTerm = "SM";
    const expected = [testDrinks[5]];
    const result = SearchCocktails(testDrinks, searchTerm);
    expect(result).toEqual(expected);
  });

  it("should return an empty array when search term does not match any drink names", () => {
    const searchTerm = "xyz";
    const result = SearchCocktails(testDrinks, searchTerm);
    expect(result).toEqual([]);
  });
});
