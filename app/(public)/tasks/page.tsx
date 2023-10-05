import { Fragment } from 'react';
import Link from 'next/link';

export default function Tasks() {
  return (
    <Fragment>
      <div className='inline-grid grid-cols-2 text-sm text-left w-full font-bold'>
        <div className='px-2'>ID NUMBER</div>
        <div>NAME</div>
      </div>
      <div className='inline-grid grid-cols-1 text-sm text-left w-full'>
        <Link href='/tasks/log?name=Anselmo,%20Philip' className='grid grid-cols-2 bg-gray-200 p-2'>
          <div>123456</div>
          <div>Anselmo, Philip</div>
        </Link>
        <Link href='/tasks/log?name=Cavalera,%20Max' className='grid grid-cols-2 bg-gray-300 p-2'>
          <div>567890</div>
          <div>Cavalera, Max</div>
        </Link>
      </div>
    </Fragment>
  );
}
