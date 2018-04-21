import { Ingredient } from "../../../components/shared/ingredient.model";

export class ShoppingList {
  constructor(
    public name: string,
    public date: Date,
    public items: Ingredient[]) {}
}
