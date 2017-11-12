export class Recipe {
  constructor(
    public title: string,
    public description: string,
    public difficulty: number,
    public steps: string,
    public ingredients: string[]) {}
}
