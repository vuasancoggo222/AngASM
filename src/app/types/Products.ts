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
   status : boolean,
}
  export type ProductCreate = {
    _id: string,
    name: string,
    image : string,
    sale_price : number,
    price : number,
    description: string,
    status: boolean,
    category_id : any,
  };
  export type ProductCart = {
    image: string,
    price : number,
    _id: string,
    name: string,
    value: number
  };