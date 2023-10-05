import { Fragment, useState } from 'react';
import Link from 'next/link';
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
      <Link href='/tasks/add'>
        <button className="my-5">ADD TASK</button>
      </Link>
      <Link href="/tasks" className="text-sm underline p-5">Back</Link>
    </Fragment>
  );
}
