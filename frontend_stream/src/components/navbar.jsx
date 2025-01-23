import '../index.css';

function navbar() {

  return (
    <>
      <div className="flex justify-between m-8 p-6 bg-slate-700 text-orange-500 rounded-lg">
        <div className='text-white text-xl font-serif'>
          <span className='text-red-600'>S</span>TREAM
        </div>
        <ul className='flex gap-6'>
          <li className='hover:text-yellow-200 hover:cursor-pointer'>Home</li>
          <li className='hover:text-yellow-200 hover:cursor-pointer'>Tweets</li>
          <li className='hover:text-yellow-200 hover:cursor-pointer'>Profile</li>
          <li className='hover:text-yellow-200 hover:cursor-pointer'>Contact Us</li>
        </ul>
        <button className='bg-orange-500 text-white py-1 px-3 rounded-md hover:text-orange-500 hover:bg-yellow-200 hover:transition-all  hover:duration-150'>Register | Login</button>
      </div>
    </>
  )
}

export default navbar;