import { useState } from "react";

export const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  const handleClick = () => {
    // console.log("se hizo click");
    // console.log("menuClicked");
    // SetmenuClicked(true);
    // setMenuClicked((prevState) => {
    //   return !prevState;
    // });
    setMenuClicked((prevState) => !prevState);
  };
  // console.log(menuClicked);
  return (
    <nav className="sm-[24px]">
      <ul
        className={`${menuClicked ? "flex" : "hidden"} after:content-['']" after:border-l-transparentafter:border-r-white absolute left-0 right-0 top-[106px] z-10 mx-auto h-[305px] w-[329px] flex-col place-content-around items-center bg-white py-[39px] text-xl font-bold text-Very-dark-grayish-blue after:absolute after:right-0 after:top-[-24px] after:border-[12px] after:border-b-white after:border-l-transparent after:border-r-white after:border-t-transparent sm:relative sm:top-0 sm:mt-0 sm:flex sm:h-full sm:w-[400px] sm:flex-row sm:bg-transparent sm:py-0 sm:text-white sm:after:hidden md:w-[500px]`}
      >
        <li className="cursor-pointer ">About</li>
        <li className="cursor-pointer ">Services</li>
        <li className="cursor-pointer ">Projects</li>
        <li className="grid h-[56px]  w-[140px] cursor-pointer place-content-center rounded-full bg-Yellow font-Fraunces uppercase text-Very-dark-desaturated-blue sm:bg-white sm:hover:bg-opacity-25 sm:hover:text-white">
          Contact
        </li>
      </ul>
      <div className="cursor-pointer sm:hidden" onClick={handleClick}>
        <img src="./images/icon-hamburger.svg" alt="Menu Hamburguesa" />
      </div>
    </nav>
  );
};
