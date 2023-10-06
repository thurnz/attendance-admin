import { Fragment } from 'react';
import Link from 'next/link';

export default function Attendance() {
  return (
    <Fragment>
      <div className='inline-grid grid-cols-2 text-sm text-left w-full font-bold'>
        <div className='px-2'>ID NUMBER</div>
        <div>NAME</div>
      </div>
      <div className='inline-grid grid-cols-1 text-sm text-left w-full'>
        <Link href={{ pathname: '/attendance/logs', query: {name: 'Anselmo, Philip'} }} className='grid grid-cols-2 bg-gray-200 p-2'>
          <div>123456</div>
          <div>Anselmo, Philip</div>
        </Link>
        <Link href={{ pathname: '/attendance/logs', query: {name: 'Cavalera, Max'} }} className='grid grid-cols-2 bg-gray-300 p-2'>
          <div>567890</div>
          <div>Cavalera, Max</div>
        </Link>
        <Link href={{ pathname: '/attendance/logs', query: {name: 'Anselmo, Philip'} }} className='grid grid-cols-2 bg-gray-200 p-2'>
          <div>123456</div>
          <div>Anselmo, Philip</div>
        </Link>
        <Link href={{ pathname: '/attendance/logs', query: {name: 'Cavalera, Max'} }} className='grid grid-cols-2 bg-gray-300 p-2'>
          <div>567890</div>
          <div>Cavalera, Max</div>
        </Link>
        <Link href={{ pathname: '/attendance/logs', query: {name: 'Anselmo, Philip'} }} className='grid grid-cols-2 bg-gray-200 p-2'>
          <div>123456</div>
          <div>Anselmo, Philip</div>
        </Link>
        <Link href={{ pathname: '/attendance/logs', query: {name: 'Cavalera, Max'} }} className='grid grid-cols-2 bg-gray-300 p-2'>
          <div>567890</div>
          <div>Cavalera, Max</div>
        </Link>
        <Link href={{ pathname: '/attendance/logs', query: {name: 'Anselmo, Philip'} }} className='grid grid-cols-2 bg-gray-200 p-2'>
          <div>123456</div>
          <div>Anselmo, Philip</div>
        </Link>
        <Link href={{ pathname: '/attendance/logs', query: {name: 'Cavalera, Max'} }} className='grid grid-cols-2 bg-gray-300 p-2'>
          <div>567890</div>
          <div>Cavalera, Max</div>
        </Link>
      </div>
    </Fragment>
  );
}
