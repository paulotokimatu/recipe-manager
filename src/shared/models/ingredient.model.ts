export class Ingredient {
  constructor(
    public id: number,
    public name: string,
    public quantity: number,
    public price: number,
    public checked: boolean
  ) {}
}
