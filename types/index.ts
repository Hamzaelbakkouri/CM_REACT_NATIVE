export type Product = {
    id: string;
    product_name: string;
    price: number;
  };
  export type Card = {
    product : Product, 
    quantity : number
  };