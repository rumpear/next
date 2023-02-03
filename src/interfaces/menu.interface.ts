import { ParsedUrlQuery } from 'querystring';

export interface IMenuRes {
  data: IMenu[];
}

export interface IMenu {
  _id: IMenuId;
  pages: IMenuPage[];
}

export interface IMenuId {
  secondCategory: string;
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
