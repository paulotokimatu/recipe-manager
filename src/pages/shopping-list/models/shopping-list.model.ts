import { ShoppingItem } from "./shopping-item.model";

export class ShoppingList {
  constructor(
    public name: string,
    public date: Date,
    public items: ShoppingItem[]) {}
}
