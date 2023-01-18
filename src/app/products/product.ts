export enum Category{
    clothing='Clothing',
    electronic='Electronic',
    food='Food',
    // shirt='shirt',
    // food='food'
}
export interface IProduct{

    id:number;
    name:string;
    category:Category;
    price:number;
    image:string;
    rating:number;
    // qty:number;
}