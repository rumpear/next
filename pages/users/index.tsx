import Link from 'next/link';
import Layout, { withLayout } from '../../src/components/Layout/Layout';
import { IUserData } from '../../src/interfaces';

export interface IUsersProps extends Record<string, unknown> {
  data: IUserData[];
}

function Users({ data }: IUsersProps) {
  return (
    <>
      <ul>
        {data?.map((user: IUserData) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { data },
  };
}

export default withLayout(Users);
