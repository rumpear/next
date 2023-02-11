import axios from 'axios';
import { GetServerSideProps } from 'next';
import { CommentDetails } from '../../src/components';
import { IMenu } from '../../src/interfaces/menu.interface';

export default function Comment({ data, menu }: any) {
  // console.log(menu);
  return (
    <div className="Comment">
      <p>{data?.name}</p>
      <p>{data?.body}</p>
      <p>
        <span>Author: </span>
        <a href={`mailto:${data?.email}`} type="email">
          {data?.email}
        </a>
      </p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  console.log(context.query, '_____________query');
  console.log(context.params, '_____________params');
  // const { id } = context.params!;
  const { data: menu } = await axios.get<IMenu[]>(
    process.env.NEXT_PUBLIC_DOMAIN + 'api/top-page/byAlias/' + 'photoshop',
    // { firstCategory: FIRST_CATEGORY },
  );

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${context.query.id}`,
  );
  const data = await res.json();

  return {
    props: { data, menu },
  };
};
