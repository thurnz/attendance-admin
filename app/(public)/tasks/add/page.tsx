import { Fragment } from 'react';
import Link from 'next/link';

export default function Add() {
  
  return (
    <Fragment>
      <div className='w-3/4 mt-2'>
        <label>TASK</label>
        <br></br>
        <input type='text' className='w-full border border-black'></input>
      </div>
      <div className='w-3/4 mt-2'>
        <label>START DATE</label>
        <br></br>
        <input type='date' className='w-full border border-black'></input>
      </div>
      <div className='w-3/4 mt-2'>
        <label>END DATE</label>
        <br></br>
        <input type='date' className='w-full border border-black'></input>
      </div>
      <div className='w-3/4 mt-2'>
        <label>DESCRIPTION</label>
        <br></br>
        <textarea rows={5} className='border border-black w-full'></textarea>
      </div>
      <Link href='/tasks'>
        <button className="my-5">SUBMIT</button>
      </Link>
      <Link href='/tasks' className='text-sm underline p-2 mx-10'>Cancel</Link>
    </Fragment>
  );
}
