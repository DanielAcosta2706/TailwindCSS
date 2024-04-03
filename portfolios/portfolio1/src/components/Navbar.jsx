import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { ThemeSwitch } from "./ThemeSwitch";

export const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const showDropdown = () => {
    setDropdown(!dropdown);
  };
  return (
    <nav className="z-50 flex h-[10vh] w-full flex-col items-center justify-center bg-[#f0ebe3] lg:h-auto dark:bg-[#1f2937]">
      <div className="relative flex h-[10vh] w-[95%] items-baseline justify-between pt-2 text-[#12222e]">
        <div className="flex w-full items-center justify-between pt-4">
          <img src="./images/logo.jpg" alt="logo" className="h-5 w-28" />
          <ThemeSwitch />
        </div>
        {dropdown ? (
          <div
            className="right-0 top-6 z-10 ml-[6px] cursor-pointer text-2xl text-[#1f2035] lg:absolute"
            onClick={showDropdown}
          >
            <MdClose />
          </div>
        ) : (
          <div
            className="ml-[6px] cursor-pointer text-2xl text-[#1f2035] dark:text-white"
            onClick={showDropdown}
          >
            <HiMenuAlt3 />
          </div>
        )}
      </div>
      {dropdown ? (
        <div
          className="absolute top-[10vh] h-[100vh] w-full bg-[#f0ebe3] transition duration-200 ease-in-out lg:right-0 lg:top-0 lg:w-[512px] dark:bg-[1f2937]"
          onClick={showDropdown}
        >
          <div className="flex h-[320px] w-full flex-col items-baseline gap-4 pt-8 text-[#12222e] lg:h-full">
            <ul className="mt-[10vh] flex h-full w-full flex-col items-center justify-center gap-y-8 px-3 text-[22px] font-bold lg:mt-0">
              <Link
                to="home"
                className="cursor-pointer text-black  no-underline hover:text-[#29a587] "
              >
                Home
              </Link>
              <Link
                to="services"
                className="cursor-pointer text-black  no-underline hover:text-[#29a587] "
              >
                Services
              </Link>
              <Link
                to="skills"
                className="cursor-pointer text-black  no-underline hover:text-[#29a587] "
              >
                Skills
              </Link>
              <Link
                to="works"
                className="cursor-pointer text-black  no-underline hover:text-[#29a587] "
              >
                Works
              </Link>
              <Link
                to="resume"
                className="cursor-pointer text-black  no-underline hover:text-[#29a587] "
              >
                Resume
              </Link>
              <Link
                to="testimonials"
                className="cursor-pointer text-black  no-underline hover:text-[#29a587] "
              >
                Testimonials
              </Link>
              <Link
                to="pricing"
                className="cursor-pointer text-black  no-underline hover:text-[#29a587] "
              >
                Pricing
              </Link>
              <Link
                to="blog"
                className="cursor-pointer text-black  no-underline hover:text-[#29a587] "
              >
                Blog
              </Link>
              <Link
                to="contact"
                className="cursor-pointer text-black  no-underline hover:text-[#29a587] "
              >
                Contact
              </Link>
            </ul>
          </div>
        </div>
      ) : null}
    </nav>
  );
};
