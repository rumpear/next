import Link from 'next/link';

export default function Users({ data }) {
  return (
    <>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps(context) {
  console.log(context, 'context');
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { data },
  };
}

// export async function getStaticPaths() {
//   // Call an external API endpoint to get posts
//   const res = await fetch('https://.../posts');
//   const posts = await res.json();

//   // Get the paths we want to pre-render based on posts
//   const paths = posts.map((post) => ({
//     params: { id: post.id },
//   }));

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false };
// }
