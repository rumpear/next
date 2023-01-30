import { GetStaticPaths, GetStaticProps } from 'next';

export default function User({ data }: any) {
  console.log(data, 'User data');
  return (
    <div>
      <p>{data.name}</p>
      <p>{data.phone}</p>
      <p>{data.email}</p>
    </div>
  );
}

// export async function getStaticProps(context: any): GetStaticProps {
//   const { id } = context.params;

//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//   const data = await res.json();

//   return {
//     props: { data },
//   };
// }

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params!;

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: { data },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();

  const paths = data.map((data: any) => ({
    params: { id: data.id.toString() },
  }));

  return { paths, fallback: false };
};
