import Link from 'next/link';

const FirstPost = () => {
  return (
    <div>
      <h1>First Post</h1>
      <Link href='/'>Back to main</Link>
    </div>
  );
};

export default FirstPost;
