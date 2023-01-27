export interface IImage {
  image: string;
}

export interface IProduct {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: IImage[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}
