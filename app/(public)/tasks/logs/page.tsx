'use client';
import { Fragment, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';
import { DataContext } from '@/contexts/context';
import Chart from '@/components/chart';

export default function Logs() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const { chart } = useContext(DataContext);
  const router = useRouter();

  return (
    <Fragment>
      <div className='w-full relative'>
        <h1>{name}</h1>
        <Chart />
      </div>
      {!chart ? 
        <>
          <div className='my-2 p-3 border-solid border border-black rounded-xl'>
            <table className='text-sm'>
              <tbody>
                <tr>
                  <td className='pr-2 align-top'>Task:</td>
                  <td>Lorem ipsum dolor</td>
                </tr>
                <tr>
                  <td className='pr-2 align-top'>Duration:</td>
                  <td>10/04/23 - 10/05/23</td>
                </tr>
                <tr>
                  <td className='pr-2 align-top'>Description:</td>
                  <td>Consectetuer adipiscing elit, sed diam nonummy nibh euismod laoreet dolore.</td>
                </tr>
                <tr>
                  <td className='pr-2 align-top'>Status:</td>
                  <td>Approved</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='my-2 p-3 border-solid border border-black rounded-xl'>
            <table className='text-sm'>
              <tbody>
                <tr>
                  <td className='pr-2 align-top'>Task:</td>
                  <td>Lorem ipsum dolor</td>
                </tr>
                <tr>
                  <td className='pr-2 align-top'>Duration:</td>
                  <td>10/04/23 - 10/05/23</td>
                </tr>
                <tr>
                  <td className='pr-2 align-top'>Description:</td>
                  <td>Consectetuer adipiscing elit, sed diam nonummy nibh euismod laoreet dolore.</td>
                </tr>
                <tr>
                  <td className='pr-2 align-top'>Status:</td>
                  <td>Denied</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
        :
        <Image
          priority
          className='p-4'
          src='/images/projects.png'
          width={262} 
          height={262} 
          alt=''
        />
      }
      <Link href={{ pathname: '/tasks/add', query: {name}}}>
        <button className="my-5">ADD TASK</button>
      </Link>
      <div className="text-sm underline p-2 cursor-pointer" onClick={() => router.back()}>Back</div>
    </Fragment>
  );
}
