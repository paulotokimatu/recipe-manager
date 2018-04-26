export class Ingredient {
  constructor(
    public name: string,
    public quantity: number,
    public price: number,
    public checked: boolean,
    public id?: number
  ) {}
}
