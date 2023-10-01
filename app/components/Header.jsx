import Link from 'next/link';
import { FaCircleInfo } from "react-icons/fa6";

const Navbar = () => {
    return (
        <nav className="bg-blue-900 p-4">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <Link href='/'>
                        <div className="hidden md:flex md:text-white font-bold text-xl">DevStats</div>
                        <div className='md:hidden text-white font-bold text-xl'>DS</div>
                    </Link>

                    <div className="md:flex space-x-4   gap-4 ">

                        <Link href='/code/repos' className='hover:text-black hover:bg-white rounded-md px-4 py-1'>My Profile</Link>
                        <Link href='/about' className='text-white text-2xl rounded-lg px-4 '><FaCircleInfo/></Link>

                    </div>
                    
                    {/* <div className="md:hidden">
                        <button className="text-white">
                            <svg
                                className="w-6 h-3"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                        </button>
                    </div> */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
