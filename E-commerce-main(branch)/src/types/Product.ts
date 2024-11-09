export interface ProductDTO {
  id: string;
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

interface Rating {
  rate: number;
  count: number;
}

export interface ICartItem {
  product: ProductDTO;
  quantity: number;
}
