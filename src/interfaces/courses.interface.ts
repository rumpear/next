import { IMenu } from './menu.interface';
import { IProduct } from './products.interface';
import { ITopPage } from './topPage.interface';

export interface ICoursesProps {
  menu: IMenu[];
  page: ITopPage;
  products: IProduct[];
}
