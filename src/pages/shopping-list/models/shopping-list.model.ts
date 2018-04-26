import { Ingredient } from "../../../shared/models/ingredient.model";

export class ShoppingList {
  constructor(
    public name: string,
    public date: Date,
    public items: Ingredient[],
    public id?: number,) {}
}
