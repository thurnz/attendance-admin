'use client';
import { Fragment, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

export default function Logs() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const [chart, setChart] = useState(false);

  const handleToggle = () => {
    setChart(!chart);
  };

  return (
    <Fragment>
      <div className='w-full relative mb-5'>
        <h1>{name}</h1>
        <h2 className='mb-5 font-bold underline'>October</h2>
        <div className='text-xs absolute bottom-0 right-0'>
          <span className={chart ? 'underline cursor-pointer' : 'pointer-events-none'} onClick={handleToggle}>TABLE</span> | <span className={!chart ? 'underline cursor-pointer' : 'pointer-events-none'} onClick={handleToggle}>CHART</span>
        </div>
      </div>
      {chart ? 
        <Image
          priority
          className='p-4'
          src='/images/attendance.png'
          width={264} 
          height={262} 
          alt=''
        />
        :
        <table className='text-sm w-full text-center'>
          <thead>
            <tr>
              <th>Date</th>
              <th>Clock In</th>
              <th>Clock Out</th>
            </tr>
          </thead>
          <tbody>
            <tr className='bg-gray-200'>
              <td className='text-xs' rowSpan={2}>Mon<br /><span className='text-xl'>2</span></td>
              <td>8:00AM</td>
              <td>12:00PM</td>
            </tr>
            <tr className='bg-gray-200'>
              <td>1:00PM</td>
              <td>5:00PM</td>
            </tr>
            <tr className='bg-gray-300'>
              <td className='text-xs' rowSpan={2}>Tue<br /><span className='text-xl'>3</span></td>
              <td>8:00AM</td>
              <td>12:00PM</td>
            </tr>
            <tr className='bg-gray-300'>
              <td>1:00PM</td>
              <td>5:00PM</td>
            </tr>
            <tr className='bg-gray-200'>
              <td className='text-xs' rowSpan={2}>Wed<br /><span className='text-xl'>4</span></td>
              <td>8:00AM</td>
              <td>12:00PM</td>
            </tr>
            <tr className='bg-gray-200'>
              <td>1:00PM</td>
              <td>5:00PM</td>
            </tr>
            <tr className='bg-gray-300'>
              <td className='text-xs' rowSpan={2}>Thu<br /><span className='text-xl'>5</span></td>
              <td>8:00AM</td>
              <td>12:00PM</td>
            </tr>
            <tr className='bg-gray-300'>
              <td>1:00PM</td>
              <td>5:00PM</td>
            </tr>
            <tr className='bg-gray-200'>
              <td className='text-xs' rowSpan={2}>Fri<br /><span className='text-xl'>6</span></td>
              <td>8:00AM</td>
              <td>12:00PM</td>
            </tr>
            <tr className='bg-gray-200'>
              <td>1:00PM</td>
              <td>5:00PM</td>
            </tr>
            <tr className='bg-gray-300'>
              <td className='text-xs' rowSpan={2}>Sat<br /><span className='text-xl'>7</span></td>
              <td>8:00AM</td>
              <td>12:00PM</td>
            </tr>
            <tr className='bg-gray-300'>
              <td>1:00PM</td>
              <td>5:00PM</td>
            </tr>
          </tbody>
        </table>
      }
      <Link href="/attendance" ><button className="mt-10">BACK</button></Link>
    </Fragment>
  );
}
