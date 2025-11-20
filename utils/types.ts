export type actionFunction = (
  prevState: any,
  formData: FormData
) => Promise<{ success: boolean; message: string }>;

export type CartItem = {
  productId: string;
  image: string;
  title: string;
  price: string;
  amount: number;
  company: string;
};

export type CartState = {
  cartItems: CartItem[];
  numItemsInCart: number;
  shipping: number;
  tax: number;
  orderTotal: number;
};
