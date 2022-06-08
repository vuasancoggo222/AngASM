export type Product = {
    _id: string,
    name: string,
    image : string,
    sale_price : number,
    price : number,
    description: string,
    status: boolean,
    category_id : any,
  };
export type Category = {
   _id : string,
   name : string,
}
  export type ProductCreate = {
    name: string
  };