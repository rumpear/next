import axios from 'axios';
import { GetStaticProps } from 'next';
import { useState } from 'react';
import { ButtonHtmlProps } from '../../src/components/ui';
import {
  IMenu,
  IMenuProps,
  IMenuRes,
} from '../../src/interfaces/menu.interface';

const Menu = ({ menuData }: IMenuProps) => {
  const [showCategory, setShowCategory] = useState({});
  const [activeCategory, setActiveCategory] = useState('');
  const [categoriesList, setCategoriesList] = useState<IMenu[]>([]);

  //   console.log(activeCategory, 'activeCategory');
  //   console.log(menu, 'menu');
  // console.log(categoriesList, 'categoriesList');

  return (
    <>
      <h1>Menu page</h1>
      <ul className="Course-list">
        {menuData?.map(({ _id, pages }) => {
          return (
            <li className="Course-list__item" key={_id.secondCategory}>
              <ButtonHtmlProps
                onClick={() => {
                  setActiveCategory(_id.secondCategory);
                  const categories = menuData?.filter(({ _id }) =>
                    _id.secondCategory.includes(activeCategory),
                  );
                  //   console.log(categories, 'categories');
                  setCategoriesList(categories);
                }}
              >
                {_id.secondCategory}
              </ButtonHtmlProps>
              <ul className="Course-list__subcategories">
                {categoriesList.map(({ pages }) => {
                  return pages.map(page => {
                    return (
                      <li
                        className="Course-list__subcategories-item"
                        key={page._id}
                      >
                        <p>{page.title}</p>
                      </li>
                    );
                  });
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Menu;

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const { data: menuData } = await axios.post<IMenuRes>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    { firstCategory },
  );

  return {
    props: { menuData, firstCategory },
  };
};
