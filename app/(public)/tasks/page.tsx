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
        <Link href={{ pathname: '/tasks/logs', query: {name: 'Davis, Jonathan'} }}  className='grid grid-cols-2 bg-gray-200 p-2'>
          <div>123456</div>
          <div>Davis, Jonathan</div>
        </Link>
        <Link href={{ pathname: '/tasks/logs', query: {name: 'Durst, Fred'} }}  className='grid grid-cols-2 bg-gray-300 p-2'>
          <div>567890</div>
          <div>Durst, Fred</div>
        </Link>
        <Link href={{ pathname: '/tasks/logs', query: {name: 'Shinoda, Mike'} }}  className='grid grid-cols-2 bg-gray-200 p-2'>
          <div>123456</div>
          <div>Shinoda, Mike</div>
        </Link>
        <Link href={{ pathname: '/tasks/logs', query: {name: 'Taylor, Corey'} }}  className='grid grid-cols-2 bg-gray-300 p-2'>
          <div>567890</div>
          <div>Taylor, Corey</div>
        </Link>
      </div>
    </Fragment>
  );
}
