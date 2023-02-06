import axios from 'axios';
import { GetStaticProps, GetStaticPaths } from 'next';
import {
  ICourseProps,
  ICourseStaticProps,
} from '../../src/interfaces/courses.interface';
import { ICourseAlias, IMenu } from '../../src/interfaces/menu.interface';
import { IProduct } from '../../src/interfaces/products.interface';
import { ITopPage } from '../../src/interfaces/topPage.interface';
// import { getStaticPaths } from '../users/[id]';

const PRODUCTS_LIMIT = 10;
const FIRST_CATEGORY = 0;

const Courses = ({ menu, products, page }: ICourseProps) => {
  console.log(menu, 'menu Course');
  console.log(page, 'page Course');
  console.log(products, 'products Course');
  return (
    <>
      <h1>Courses page</h1>
      {/* <h1>{products.length}</h1> */}
      <h1>Courses page</h1>
    </>
  );
};

export default Courses;

export const getStaticProps: GetStaticProps<
  ICourseStaticProps,
  ICourseAlias
> = async ({ params }) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const { data: menu } = await axios.post<IMenu[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    // { firstCategory: FIRST_CATEGORY },
    { category: 'Photoshop', limit: 10 },
  );

  const { data: page } = await axios.get<ITopPage>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias,
  );

  const { data: products } = await axios.post<IProduct>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find',
    { category: page.category, limit: PRODUCTS_LIMIT },
  );

  return {
    props: { menu, products, page },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: menu } = await axios.post<IMenu[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    { firstCategory: FIRST_CATEGORY },
    // { category: 'Photoshop', limit: 10 },
  );

  //* v1
  // const paths = menu.flatMap(({ pages }) => {
  //   return pages.map(page => ({
  //     params: {
  //       alias: '/courses' + page.alias,
  //     },
  //   }));
  // });

  //* v2
  // const paths = menu.flatMap(({ pages }) => {
  //   console.log(pages, 'pages');
  //   return pages.map(page => '/courses' + page.alias);
  // });

  // console.log(paths, 'paths');

  console.log(
    menu.flatMap(m => m.pages.map(p => '/courses/' + p.alias)),
    'dashdaskjdhas',
  );
  return {
    // paths,
    //* v3
    paths: menu.flatMap(m => m.pages.map(p => '/courses/' + p.alias)),
    fallback: true,
  };
};
