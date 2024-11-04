export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  alcohol: number;
  description: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export type Filter = 'all' | 'wine' | 'beer' | 'spirits' | 'under50';