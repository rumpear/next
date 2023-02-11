import Link from 'next/link';

export default function Comments({ data }: any) {
  return (
    <>
      <ul>
        {data?.map((comment: any) => (
          <li key={comment.id}>
            <Link
              href={`/comments/${comment.email}`}
              as={{
                pathname: `/comments/${comment.email}`,
                query: { id: comment.id },
              }}
            >
              {comment.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/comments');
  const data = await res.json();

  //   if (!data) {
  //     return { notFound: true };
  //   }

  return {
    props: { data },
  };
}
