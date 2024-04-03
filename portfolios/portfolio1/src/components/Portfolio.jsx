import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export const Portfolio = () => {
  const Card = ({ image, title, sub_title, text }) => {
    return (
      <div className="hoverBtn">
        <div className="relative overflow-hidden rounded-[20px] bg-white px-[35px] py-[30px]">
          <img
            src={image}
            alt="portfolio"
            className="h-60 w-full rounded-[18px] object-cover"
          />
          <p className="m-0 pb-[5px] pt-[30px] text-[13px] font-bold text-[#29a587]">
            {title}
          </p>
          <h1 className="m-0 text-2xl font-bold">{sub_title}</h1>
          <p className="my-[30px] text-justify leading-[1.7rem] text-[#262626] opacity-80">
            {text}
          </p>
          <Link
            to="pricing"
            className="flex items-center gap-x-2 font-bold text-black no-underline"
          >
            See Pricing <FaArrowRight className="text-[#29a587]" />
          </Link>
          <div className="absolute -bottom-6 -right-6 h-[131px] w-[131px] bg-[url('./images/pat.svg')] bg-contain bg-center"></div>
        </div>
      </div>
    );
  };
  return (
    <main className="bg-[#f0ebe3] px-3 pb-5 pt-52 dark:bg-[#1f2937]" id="works">
      <div className="conatiner mx-auto flex max-w-[1200px] flex-col items-center">
        <h1 className="m-0 text-center text-[26px] sm:text-[44px]">
          PORTFOLIO
        </h1>
        <p className="flex items-center gap-x-4 text-center text-sm font-bold text-[#29a587]">
          My <span className="caveat m-0 text-3xl text-black">Cases</span>
        </p>
        <ul className="my-10 flex items-center gap-x-6 text-[13px] font-bold">
          <ol>ALL</ol>
          <ol>VIDEO</ol>
          <ol>PHOTOGRAPHY</ol>
          <ol>BRANDING</ol>
        </ul>
        <section className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            title="BRANDING"
            sub_title="Zorro"
            image="https://luique.bslthemes.com/wp-content/uploads/2021/11/work4.jpeg"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed to eiusmod tempor incididunt ut labore et dolore"
          />
          <Card
            title="BRANDING"
            sub_title="Gooir"
            image="https://luique.bslthemes.com/wp-content/uploads/2021/11/work2.jpeg"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed to eiusmod tempor incididunt ut labore et dolore"
          />
          <Card
            title="VIDEO"
            sub_title="Explore"
            image="https://luique.bslthemes.com/wp-content/uploads/2021/11/work7.jpg"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed to eiusmod tempor incididunt ut labore et dolore"
          />
          <Card
            title="VIDEO"
            sub_title="Stay Fit"
            image="https://luique.bslthemes.com/wp-content/uploads/2021/11/single8.jpg"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed to eiusmod tempor incididunt ut labore et dolore"
          />
          <Card
            title="PHOTOGRAPHY"
            sub_title="Kana"
            image="https://luique.bslthemes.com/wp-content/uploads/2021/11/single6.jpg"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed to eiusmod tempor incididunt ut labore et dolore"
          />
          <Card
            title="PHOTOGRAPHY"
            sub_title="Mozar"
            image="https://luique.bslthemes.com/wp-content/uploads/2021/11/work1.jpeg"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed to eiusmod tempor incididunt ut labore et dolore"
          />
        </section>
        <span className="shadowbtn mt-[70px] block h-14 rounded-full border border-solid border-black">
          <button className="h-full rounded-full border-solid bg-transparent px-10 font-bold hover:border-2 hover:border-white hover:bg-[#29a587] hover:text-white dark:text-white">
            VIEW MORE
          </button>
        </span>
      </div>
    </main>
  );
};
