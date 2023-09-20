import Link from 'next/link';

export default function Register() {
  
  return (
    <div className="flex justify-center flex-col items-center">
      <div>
        <label>ID NUMBER</label>
        <br></br>
        <input type="text" id="idNum" />
      </div>
      <div className="mt-2">
        <label>EMAIL</label>
        <br></br>
        <input type="text" id="email" />
      </div>
      <div className="mt-2">
        <label>PASSWORD</label>
        <br></br>
        <input type="password" id="idNum" />
      </div>
      <div className="mt-2">
        <label>CONFIRM PASSWORD</label>
        <br></br>
        <input type="password" id="idNum" />
      </div>
      <Link href="/">
        <button className="my-10">REGISTER</button>
      </Link>
      <Link href="/" className="text-sm absolute bottom-10 underline">Cancel</Link>
    </div>
  );
}
