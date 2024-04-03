import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export const Services = () => {
  const Card = ({ title, sub_title, text }) => {
    return (
      <div className="hoverBtn w-full">
        <div className="relative overflow-hidden rounded-[18px] bg-white px-9 py-[30px]">
          <p className="pb-12 text-[13px] font-bold dark:text-black">{title}</p>
          <h1 className="text-2xl font-bold dark:text-black">{sub_title}</h1>
          <p className="min-h-[175px] text-justify leading-[1.7rem] text-[#262626] opacity-80">
            {text}
          </p>
          <Link
            to="SeePricing"
            className="flex items-center gap-x-2 font-bold text-black no-underline"
          >
            See Pricing <FaArrowRight className="text-[#29a587]" />
          </Link>
          <div className="absolute -right-6 bottom-6 h-[131px] w-[131px] bg-[url(./images/pat.svg)] bg-contain bg-center"></div>
        </div>
      </div>
    );
  };
  return (
    <div className="bg-[#f0ebe3] px-3 pt-52 dark:bg-[#1f2937]" id="services">
      <div className="container mx-auto w-full max-w-[1200px]">
        <h1 className="m-0 text-center text-[26px] sm:text-[44px]">
          WHAT I DO
        </h1>
        <p className="flex items-center justify-center gap-x-4 text-center text-sm font-bold text-[#29a587]">
          My <span className="caveat text-3xl text-black">Services</span>
        </p>

        <section className="mt-8 grid w-full grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            title="WEB DEVELOPMENT"
            sub_title="Web Design & Logo"
            text="Web designers craft the overall vision & plan of a website layout. Professional log development: Business, Company or Personal"
          />
          <Card
            title="APPS DEVELOPMENT"
            sub_title="iOS & Android"
            text="Design Software applications to run on mobile devices. Modern and mobile-ready application that will help you reach all of your marketing"
          />
          <Card
            title="GAME DEVELOPMENT"
            sub_title="Unity & Unreal Engine"
            text="Creating Games & describes the design, development and reales of a game. Developing unique mobile android and ios game."
          />
        </section>
      </div>
    </div>
  );
};
