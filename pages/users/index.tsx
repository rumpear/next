import Link from 'next/link';

export default function Users({ data }: any) {
  return (
    <>
      <ul>
        {data?.map((user: any) => (
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
