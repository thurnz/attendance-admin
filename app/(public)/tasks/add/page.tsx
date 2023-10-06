'use client';
import { Fragment } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Add() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  
  return (
    <Fragment>
      <div className='w-full'>
        <h1>{name}</h1>
      </div>
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
      <button className="my-5" onClick={() => router.back()}>SUBMIT</button>
      <div className='text-sm underline p-2 mx-10 cursor-pointer' onClick={() => router.back()}>Cancel</div>
    </Fragment>
  );
}
