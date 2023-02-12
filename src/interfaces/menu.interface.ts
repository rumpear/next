import { ParsedUrlQuery } from 'querystring';
export interface IMenu {
  _id: {
    secondCategory: string;
  };
  pages: IMenuPage[];
}

export interface IMenuPage {
  alias: string;
  title: string;
  _id: string;
  category: string;
}

export interface IMenuProps {
  menuData: IMenu[];
}

export interface ICourseAlias extends ParsedUrlQuery {
  alias: string;
}
