import { ShoppingItem } from "./shopping-item.model";

export class List {
  constructor(
    public name: string,
    public date: Date,
    public ingredients: ShoppingItem[]) {}
}
