export type Product = {
  id: number;
  price: number;
};

export type PurchasePayload = {
  products: Product[];
  delivery: {
    receiver: string;
    andress: {
      description: string;
      city: string;
      zipCode: string;
      number: number;
      complement: string;
    };
  };
  payment: {
    card: {
      name: string;
      number: number;
      code: number;
      expires: {
        month: number;
        year: number;
      };
    };
  };
};
