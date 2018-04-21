import { Ingredient } from "../../components/shared/ingredient.model";

export class Recipe {
  constructor(
    public title: string,
    public difficulty: number,
    public ingredients: Ingredient[],
    public notes: string,
  ) {}
}
