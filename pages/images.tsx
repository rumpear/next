import Image from 'next/image';

import forest from '../public/forest.png';
import tree from '../public/tree.webp';

export default function Images() {
  return (
    <>
      <h1>Images</h1>
      <Image src={tree} alt='tree' placeholder='blur' />
      <Image src={forest} alt='forest' placeholder='blur' />
    </>
  );
}
