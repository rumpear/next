import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Comments({ data }) {
  const { pathname } = useRouter();

  return (
    <>
      <ul>
        {data?.map((comment) => (
          <li key={comment.id}>
            <Link href={`/comments/${comment.id}`}>{comment.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/comments');
//   const data = await res.json();

//   return {
//     props: { data },
//   };
// }

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
