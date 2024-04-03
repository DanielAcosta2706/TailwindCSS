import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export const Blog = () => {
  const Card = ({ date, title, image }) => {
    return (
      <div className="hoverBtn">
        <div className="relative overflow-hidden rounded-[20px] bg-white px-[35px] py-[30px]">
          <p className="text-[13px] font-medium dark:text-black">{date}</p>
          <p className="my-[15px] text-2xl font-bold hover:text-[#29a587] dark:text-black">
            {title}
          </p>
          <p className="text-justify leading-[1.7rem] text-[#262626] opacity-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A
            consectetur ea quasi quas alias doloribus voluptatibus officiis
            assumenda eveniet. Expedita, voluptate ipsum esse harum minus
            officiis sunt inventore. Aut, error!
          </p>
          <span className="pt-[10px]">
            <Link
              to="blog"
              className="flex items-center gap-x-2 font-bold text-black no-underline"
            >
              Read More <FaArrowRight className="text-[#29a587]" />
            </Link>
          </span>
          <img
            src={image}
            alt="blog"
            className="mt-[30px] h-[180px] w-full rounded-[18px] object-cover"
          />
        </div>
      </div>
    );
  };
  return (
    <main className="bg-[#f0ebe3] px-3 pb-5 pt-52 dark:bg-[#1f2937]" id="blog">
      <div className="container mx-auto flex max-w-[1200px] flex-col items-center">
        <h1 className="m-0 text-center text-[26px] sm:text-[44px]">
          LATEST BLOG
        </h1>
        <p className="flex items-center gap-x-4 text-center text-sm font-bold text-[#29a587]">
          MY
          <span className="caveat text-3xl text-black">
            Articles and Advice
          </span>
        </p>
        <section className="mt-[60px] grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            date="SEPTEMBER 27, 2020"
            title="The Main Thing For The Designer"
            image="https://luique.bslthemes.com/wp-content/uploads/2022/11/blog-2.jpg"
          />
          <Card
            date="OCTOBER 28, 2021"
            title="Follow Your Own Design Process"
            image="https://luique.bslthemes.com/wp-content/uploads/2022/11/blog-4-scaled-1.jpg"
          />
          <Card
            date="NOVEMBER 30, 2022"
            title="Usability Secrets to Create Better Interfaces"
            image="https://luique.bslthemes.com/wp-content/uploads/2022/11/blog-2.jpg"
          />
        </section>
        <span className="shadowbtn mt-[70px] block h-14 rounded-full border border-solid border-black">
          <button className="h-full rounded-full border-solid bg-transparent px-10 font-bold hover:border-2 hover:border-white hover:bg-[#29a587] hover:text-white dark:text-white">
            VIEW BLOCK
          </button>
        </span>
      </div>
    </main>
  );
};
