export type Product = {
    id: number;
    product_name: string;
    price: number;
  };
  export type Card = {
    product : Product, 
    quantity : number
  };