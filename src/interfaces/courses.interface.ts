import { IMenu } from './menu.interface';
import { IProduct } from './products.interface';
import { ITopPage } from './topPage.interface';

export interface ICourseProps {
  menu: IMenu[];
  page: ITopPage;
  products: IProduct;
}

export interface ICourseStaticProps {
  menu: IMenu[];
  page: ITopPage;
  products: IProduct;
}
