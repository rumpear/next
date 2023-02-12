import axios from 'axios';
import { GetStaticProps, GetStaticPaths } from 'next';
import { ICoursesProps } from '../../src/interfaces/courses.interface';
import { ICourseAlias, IMenu } from '../../src/interfaces/menu.interface';
import { IProduct } from '../../src/interfaces/products.interface';
import { ITopPage } from '../../src/interfaces/topPage.interface';

const PRODUCTS_LIMIT = 10;
const FIRST_CATEGORY = 0;

const Courses = ({ menu, products, page }: ICoursesProps) => {
  // console.log(menu, 'menu Course');
  // console.log(page, 'page Course');
  // console.log(products, 'products Course');
  return (
    <>
      <h1>{page.blog.h1}</h1>
      <h2>Courses page list</h2>
      {!!products.length && (
        <ul>
          {products.map(product => (
            <li key={product._id}>{product.title}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Courses;

export const getStaticProps: GetStaticProps<
  ICoursesProps,
  ICourseAlias
> = async ({ params }) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  console.log(params, 'params Courses');

  const { data: menu } = await axios.post<IMenu[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    { firstCategory: FIRST_CATEGORY },
  );

  const { data: page } = await axios.get<ITopPage>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias,
  );

  const { data: products } = await axios.post<IProduct[]>(
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
  );

  //* v1
  const paths = menu.flatMap(({ pages }) => {
    return pages.map(page => ({
      params: {
        alias: page.alias,
      },
    }));
  });

  //* v2 without params
  // const paths = menu.flatMap(m => m.pages.map(p => '/courses/' + p.alias));

  return {
    paths,
    fallback: true,
  };
};
