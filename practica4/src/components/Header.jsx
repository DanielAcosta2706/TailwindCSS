import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <header className="absolute w-full px-6 pt-8 font-Barlow">
      <div className="flex place-content-between">
        <img src="./images/logo.svg" alt="Logo" />
        <Navbar />
      </div>
    </header>
  );
};
