import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

export const MenuHamburguesa = () => {
  const [click, SetClick] = useState(false);
  const handleClick = () => {
    SetClick(!click);
  };
  const content = (
    <>
      <div className="absolute left-0 right-0 top-[110px] z-50 block w-full bg-gray-800 bg-opacity-10 backdrop-blur-lg transition lg:hidden">
        <ul className="p-10 text-center text-xl ">
          <Link to="Home" className="">
            <li className="link mb-2">Home</li>
          </Link>
          <Link to="Shop" className="">
            <li className="link mb-2">Play Together</li>
          </Link>
          <Link to="Blogs" className="">
            <li className="link mb-2">Explore</li>
          </Link>
          <Link to="Pages" className="">
            <li className="link mb-2">Bowser Fury</li>
          </Link>
          <Link to="Contact" className="">
            <li className="link mb-2">Buy Now</li>
          </Link>
        </ul>
      </div>
    </>
  );
  return (
    <nav className="z-50 ">
      <div className=" flex items-center justify-around  bg-gray-800 px-10 py-5 lg:py-5">
        <img
          src="img/logo.png"
          alt="Logo"
          // width="100"
          className="cursor-pointer"
        />
        <div className="links hidden  md:block md:w-4/6 ">
          <ul className="menu flex items-center justify-end gap-8 ">
            <Link to="Home" className="">
              <li className="link">Home</li>
            </Link>
            <Link to="Shop" className="">
              <li className="link">Play Together</li>
            </Link>
            <Link to="Blogs" className="">
              <li className="link">Explore</li>
            </Link>
            <Link to="Pages" className="">
              <li className="link">Bowser Fury</li>
            </Link>
            <Link to="Contact" className="">
              <li className="link">Buy Now</li>
            </Link>
          </ul>
        </div>
        <div>{click && content}</div>
        <button
          className="block transition-none md:hidden"
          onClick={handleClick}
        >
          {click ? (
            <FaTimes className="text-white" />
          ) : (
            <CiMenuFries className="text-white" />
          )}
        </button>
      </div>
    </nav>
  );
};
