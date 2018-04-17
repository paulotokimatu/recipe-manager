export class Recipe {
  constructor(
    public title: string,
    public difficulty: number,
    public ingredients: string[],
    public notes: string,
  ) {}
}
