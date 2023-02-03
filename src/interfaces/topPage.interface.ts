export enum LevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export interface IAdvantage {
  title: string;
  description: string;
  _id: string;
}

export interface IHhData {
  count: number;
  juniorSalary: number;
  middleSalary: number;
  seniorSalary: number;
  updatedAt: Date;
  _id: string;
}

export interface IBlog {
  h1: string;
  metaTitle: string;
  metaDescription: string;
  views: number;
  _id: string;
}

export interface ISravnikus {
  metaTitle: string;
  metaDescription: string;
  qas: unknown[];
  _id: string;
}

export interface ILearningClub {
  metaTitle: string;
  metaDescription: string;
  qas: unknown[];
  _id: string;
}

export interface ITopPage {
  _id: string;
  tags: string[];
  secondCategory: string;
  alias: string;
  title: string;
  category: string;
  seoText: string;
  tagsTitle: string;
  metaTitle: string;
  metaDescription: string;
  firstCategory: LevelCategory;
  advantages: IAdvantage[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  hh: IHhData;
  qas: unknown[];
  addresses: unknown[];
  categoryOn: string;
  blog: IBlog;
  sravnikus: ISravnikus;
  learningclub: ILearningClub;
}
