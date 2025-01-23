import { FaGithub, FaInstagramSquare, FaFacebook} from "react-icons/fa";

function footer() {
  return (
    <>
        <div className="m-8 p-6 bg-slate-700 text-orange-500 rounded-lg">
            <div className="flex justify-between">
                <div className='text-white text-2xl font-serif'>
                    <span className='text-red-600'>S</span>TREAM
                </div> 
                <ul>
                    <li className="hover:text-yellow-200 hover:cursor-pointer">Forgot Password</li>
                    <li className="hover:text-yellow-200 hover:cursor-pointer">Dashboard</li>
                    <li className="hover:text-yellow-200 hover:cursor-pointer">Player Controls</li>
                </ul>
                <ul>
                    <li className="hover:text-yellow-200 hover:cursor-pointer">About Us</li>
                    <li className="hover:text-yellow-200 hover:cursor-pointer">Contact Us</li>
                    <li className="hover:text-yellow-200 hover:cursor-pointer">Carrers</li>
                </ul>
                <ul className="flex gap-2">
                    <li className=" hover:text-yellow-200 hover:transition-all  hover:duration-150 hover:cursor-pointer h-1"><FaGithub size={30} /></li>
                    <li className=" hover:text-yellow-200 hover:transition-all  hover:duration-150 hover:cursor-pointer h-1"><FaInstagramSquare size={30}/></li>
                    <li className=" hover:text-yellow-200 hover:transition-all  hover:duration-150 hover:cursor-pointer h-1"><FaFacebook size={30} /></li>
                </ul>
            </div>
            <div className="text-center mt-10"> hover:cursor-pointer
                Developed By <span className="text-red-700">S</span><span className="text-white">TREAM</span>
                <div>
                    &copy; Copyright liscence under S2025 
                </div>
            </div>
        </div>
    </>
  )
};

export default footer;