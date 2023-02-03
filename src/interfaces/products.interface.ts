export interface ICharacteristic {
  name: string;
  value: string;
}

export interface IBlog {
  text: string;
  _id: string;
  bigImage: string;
}

export interface IReview {
  _id: string;
  name: string;
  title: string;
  description: string;
  rating: number;
  createdAt: Date;
}

export interface IProduct {
  _id: string;
  categories: string[];
  tags: string[];
  title: string;
  image: string;
  description: string;
  link: string;
  price: number;
  credit: number;
  oldPrice: number;
  characteristics: ICharacteristic[];
  advantages: string;
  initialRating: number;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  html: string;
  blog: IBlog;
  companyId: string;
  clicks: number;
  reviews: IReview[];
  reviewCount: number;
  reviewAvg?: unknown;
}
