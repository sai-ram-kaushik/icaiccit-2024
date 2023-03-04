import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] bg-[#0b131f]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src="/aiccit_logo.png" width={150} height={100} />
        <div>
          <ul className="hidden md:flex ">
            <Link href="/">
              <li className="ml-10 text-sm hover:text-cyan-600 text-white">Home</li>
            </Link>
            <Link href="/about">
              <li className="ml-10 text-sm hover:text-cyan-600 text-white">About Us</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm hover:text-cyan-600 text-white">
                Conference Committee
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm hover:text-cyan-600 text-white">Conference Track</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm hover:text-cyan-600 text-white">Important Dates</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm hover:text-cyan-600 text-white">Submission</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm hover:text-cyan-600 text-white">Registration</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm hover:text-cyan-600 text-white">
                Previous Year Conferences
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden text-white">
            <AiOutlineMenu size={25} />
          </div>
        </div>
        <div>
            <Image src="/mrlogo.png" width={150} height={100}/>
        </div>
      </div>

      <div className={nav ? 'fixed left-0 top-0 w-full h-screen bg-black/70' : ""}>
        <div className={nav ? 'fixed left-0 top-0 w-[70%] sm:w-[60%] md:w-[45%] h-screen bg-[#0b131f] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0  p-10 ease-in duration-500'}>
            <div>
                <div className="flex w-full items-center justify-between ">
                    <Image src="/aiccit_logo.png" width={100} height={35} />
                    <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer text-white">
                        <AiOutlineClose />
                    </div>
                </div>
            </div>

            <div className="py-4 flex flex-col">
                <ul className="uppercase mt-14 ">
                    <Link href="/">
                        <li className="py-4 text-sm text-white">Home</li>
                    </Link>
                    <Link href="/">
                        <li className="py-4 text-sm text-white">About Us</li>
                    </Link>
                    <Link href="/">
                        <li className="py-4 text-sm text-white">conference Committee</li>
                    </Link>
                    <Link href="/">
                        <li className="py-4 text-sm text-white">Conference Track</li>
                    </Link>
                    <Link href="/">
                        <li className="py-4 text-sm text-white">Important Dates</li>
                    </Link>
                    <Link href="/">
                        <li className="py-4 text-sm text-white">Submission</li>
                    </Link>
                    <Link href="/">
                        <li className="py-4 text-sm text-white">Registration</li>
                    </Link>
                    <Link href="/">
                        <li className="py-4 text-sm text-white">Previous Year Conferences</li>
                    </Link>
                </ul>
                <div className="py-10">
                    <Image src="/mrlogo.png" width={200} height={150}/>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
