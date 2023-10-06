import { Fragment } from 'react';

export default function Leaves() {
  const Status = () => {
    return (
      <select className='border-black border w-full'>
        <option value='pending'>Pending</option>
        <option value='approved'>Approved</option>
        <option value='denied'>Denied</option>
      </select>
    );
  }

  return (
    <Fragment>
      <div className='my-2 p-3 border-solid border border-black rounded-xl'>
        <table className='text-sm'>
          <tbody>
            <tr className='font-bold'>
              <td className='pr-2 align-top'>Name:</td>
              <td>Cobain, Kurt (123456)</td>
            </tr>
            <tr>
              <td className='pr-2 align-top'>Leave&nbsp;Type:</td>
              <td>Vacation Leave</td>
            </tr>
            <tr>
              <td className='pr-2 align-top'>Duration:</td>
              <td>10/04/23 - 10/05/23</td>
            </tr>
            <tr>
              <td className='pr-2 align-top'>Reason:</td>
              <td>Consectetuer adipiscing elit, sed diam nonummy nibh euismod laoreet dolore.</td>
            </tr>
            <tr>
              <td className='pr-2 align-top'>Status:</td>
              <td><Status /></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='my-2 p-3 border-solid border border-black rounded-xl'>
        <table className='text-sm'>
          <tbody>
            <tr className='font-bold'> 
              <td className='pr-2 align-top'>Name:</td>
              <td>Cornell, Chris (558874)</td>
            </tr>
            <tr>
              <td className='pr-2 align-top'>Leave&nbsp;Type:</td>
              <td>Vacation Leave</td>
            </tr>
            <tr>
              <td className='pr-2 align-top'>Duration:</td>
              <td>10/04/23 - 10/05/23</td>
            </tr>
            <tr>
              <td className='pr-2 align-top'>Reason:</td>
              <td>Consectetuer adipiscing elit, sed diam nonummy nibh euismod laoreet dolore.</td>
            </tr>
            <tr>
              <td className='pr-2 align-top'>Status:</td>
              <td><Status /></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='my-2 p-3 border-solid border border-black rounded-xl'>
        <table className='text-sm'>
          <tbody>
            <tr className='font-bold'>
              <td className='pr-2 align-top'>Name:</td>
              <td>Vedder, Eddie (658985)</td>
            </tr>
            <tr>
              <td className='pr-2 align-top'>Leave&nbsp;Type:</td>
              <td>Vacation Leave</td>
            </tr>
            <tr>
              <td className='pr-2 align-top'>Duration:</td>
              <td>10/04/23 - 10/05/23</td>
            </tr>
            <tr>
              <td className='pr-2 align-top'>Reason:</td>
              <td>Consectetuer adipiscing elit, sed diam nonummy nibh euismod laoreet dolore.</td>
            </tr>
            <tr>
              <td className='pr-2 align-top'>Status:</td>
              <td><Status /></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='my-2 p-3 border-solid border border-black rounded-xl'>
        <table className='text-sm'>
          <tbody>
            <tr className='font-bold'>
              <td className='pr-2 align-top'>Name:</td>
              <td>Staley, Layne (549025)</td>
            </tr>
            <tr>
              <td className='pr-2 align-top'>Leave&nbsp;Type:</td>
              <td>Vacation Leave</td>
            </tr>
            <tr>
              <td className='pr-2 align-top'>Duration:</td>
              <td>10/04/23 - 10/05/23</td>
            </tr>
            <tr>
              <td className='pr-2 align-top'>Reason:</td>
              <td>Consectetuer adipiscing elit, sed diam nonummy nibh euismod laoreet dolore.</td>
            </tr>
            <tr>
              <td className='pr-2 align-top'>Status:</td>
              <td><Status /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}
