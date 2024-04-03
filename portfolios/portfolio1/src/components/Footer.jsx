import { FaBehance, FaDribbble, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-[#f0ebe3] px-3 dark:bg-[#1f2937]">
      <div className="container mx-auto flex flex-col items-center justify-between gap-y-4 py-[60px] sm:flex-row">
        <div className="flex items-center gap-x-8 text-[22px]">
          <FaTwitter />
          <FaDribbble />
          <FaBehance />
        </div>
        <p className="text-[13px] font-bold text-[#262626] dark:text-white">
          c 2022 <span className="text-[#29a587]">MONNI</span>. ALL RIGHTS
          RESERVED
        </p>
        <p className="text-[13px] font-bold text-[#262626] dark:text-white">
          DEVELOPED BY <span className="text-[#29a587]">ACOSTA DANIEL</span>
        </p>
      </div>
    </footer>
  );
};
