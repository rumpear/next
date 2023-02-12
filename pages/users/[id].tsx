import { GetStaticPaths, GetStaticProps, GetStaticPropsResult } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { ButtonHtmlProps } from '../../src/components/ui/';
import plane from '../../src/assets/svg/plane.svg';
import { useEffect, useState } from 'react';
import { IUserData } from '../../src/interfaces';
import { withLayout } from '../../src/components/Layout/Layout';

interface IUserProps extends Record<string, unknown> {
  data: IUserData;
}

interface IUserStaticProps {
  data: IUserData[];
}

interface IUserId extends ParsedUrlQuery {
  id: string;
}

function User({ data }: IUserProps) {
  const [foo, setFoo] = useState('');
  const [bar, setBar] = useState('');

  useEffect(() => {
    if (foo) {
      setBar('Some');
    }
  }, [foo]);

  return (
    <div>
      <p>{data.name}</p>
      <p>{data.phone}</p>
      <p>{data.email}</p>
      <p>{bar}</p>
      <ButtonHtmlProps onClick={() => setBar(data.email)}>
        <img
          src={plane.src}
          alt="plane"
          className="btn-svg"
          style={{ width: '200px' }}
        />
      </ButtonHtmlProps>
    </div>
  );
}

export default withLayout(User);

export const getStaticProps: GetStaticProps<
  IUserStaticProps,
  IUserId
> = async ({ params }): Promise<GetStaticPropsResult<IUserStaticProps>> => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`,
  );
  const data: IUserData[] = await res.json();

  return {
    props: { data },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data: IUserData[] = await res.json();

  const paths = data.map((data: IUserData) => ({
    params: { id: data.id.toString() },
  }));

  return { paths, fallback: false };
};
