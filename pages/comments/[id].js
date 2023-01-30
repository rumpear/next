import { CommentDetails } from '../../src/components';

export default function Comment({ data }) {
  return (
    <div className='Comment'>
      <p>{data?.name}</p>
      <p>{data?.body}</p>
      <p>
        <span>Author: </span>
        <a href={`mailto:${data?.email}`} type='email'>
          {data?.email}
        </a>
      </p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${id}`
  );
  const data = await res.json();

  return {
    props: { data },
  };
}