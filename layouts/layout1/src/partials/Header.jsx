import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav className="wrapper flex h-20 items-center justify-between ">
        <Link to="inicio" className="w-1/3 max-w-[140px] ">
          <img src="../../images/logo.svg" alt="Logo" className="w-full" />
        </Link>
        <input type="checkbox" id="menu" className="peer hidden" />
        <label
          htmlFor="menu"
          className="z-50 h-5 w-6 cursor-pointer bg-open-menu bg-cover bg-center transition-all peer-checked:bg-close-menu md:hidden"
        ></label>
        <nav className="fixed inset-0 z-40 translate-x-full bg-gradient-to-b from-white/70 to-black/70 transition-transform peer-checked:translate-x-0 md:static md:translate-x-0 md:bg-none">
          <ul className="absolute inset-x-0 top-24 mx-auto grid h-max w-[90%] gap-6 rounded-md bg-white p-12 text-center font-bold text-dark-blue shadow-2xl md:static md:w-max md:grid-flow-col md:bg-transparent md:p-0">
            <li>
              <Link to="pricing">Pricing</Link>
            </li>
            <li>
              <Link to="product">Product</Link>
            </li>
            <li>
              <Link to="aboutUs">About Us</Link>
            </li>
            <li>
              <Link to="carrers">Careers</Link>
            </li>
            <li>
              <Link to="community">Community</Link>
            </li>
          </ul>
        </nav>
        <Link
          to="getStarted"
          className="button hidden py-3 shadow-sm shadow-bright-red/30 lg:block"
        >
          Get Started
        </Link>
      </nav>
    </header>
  );
};
