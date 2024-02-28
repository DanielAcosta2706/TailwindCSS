import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <header className=" mb-8 flex place-content-between items-center">
      <img src="./images/logo.svg" alt="Logo" />
      <Navbar />
    </header>
  );
};
