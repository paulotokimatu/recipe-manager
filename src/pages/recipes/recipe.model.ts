import { Ingredient } from "../../shared/models/ingredient.model";

export class Recipe {
  constructor(
    public name: string,
    public difficulty: number,
    public servings: number,
    public ingredients: Ingredient[],
    public notes: string,
    public id?: number,
  ) {}
}
