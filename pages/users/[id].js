export default function User({ data }) {
  console.log(data, 'User data');
  return (
    <div>
      <p>{data.name}</p>
      <p>{data.phone}</p>
      <p>{data.email}</p>
    </div>
  );
}

export async function getStaticProps(context) {
  const { id } = context.params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: { data },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();

  const paths = data.map((data) => ({
    params: { id: data.id.toString() },
  }));

  return { paths, fallback: false };
}
