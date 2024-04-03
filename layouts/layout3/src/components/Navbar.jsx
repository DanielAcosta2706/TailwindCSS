import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(true);

  const handleClick = () => {
    setMenuClicked((prevState) => !prevState);
  };
  return (
    <>
      <ul
        className={`${menuClicked ? "hidden" : ""} absolute right-0 top-0 h-full w-[256px] bg-white p-[24px] text-[18px] sm:relative sm:flex sm:h-auto sm:w-[438px] sm:place-content-around sm:items-center sm:p-0 sm:text-[16px]`}
      >
        <li
          className={`${menuClicked ? "hidden" : ""} flex cursor-pointer  place-content-end sm:hidden`}
        >
          <img
            className="mb-[87px] h-8 w-8"
            src="images/icon-menu-close.svg"
            onClick={handleClick}
            alt=""
          />
        </li>
        <li className="mb-8 sm:mb-0">
          <Link to="home" className="sm:text-4 hover:text-SoftRed">
            Home
          </Link>
        </li>
        <li className="mb-8 sm:mb-0">
          <Link to="New" className="hover:text-SoftRed">
            New
          </Link>
        </li>
        <li className="mb-8 sm:mb-0">
          <Link to="Popular" className="hover:text-SoftRed">
            Popular
          </Link>
        </li>
        <li className="mb-8 sm:mb-0">
          <Link to="Trending" className="hover:text-SoftRed">
            Trending
          </Link>
        </li>
        <li className="mb-8 sm:mb-0">
          <Link to="Categories" className="hover:text-SoftRed">
            Categories
          </Link>
        </li>
      </ul>
      <img
        className={`${menuClicked ? "" : "hidden"} h-4 w-10 cursor-pointer sm:hidden`}
        src="images/icon-menu.svg"
        onClick={handleClick}
        alt=""
      />
    </>
  );
};
