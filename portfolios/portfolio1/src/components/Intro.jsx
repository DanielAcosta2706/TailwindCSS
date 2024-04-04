import { FaBehance, FaDribbble, FaTwitter } from "react-icons/fa";

export const Intro = () => {
  return (
    <main
      className="flex min-h-screen bg-[#f0ebe3] pt-36 xl:pt-0 dark:bg-[#1f2937]"
      id="home"
    >
      <div className="container mx-auto max-w-[1200px] items-center lg:px-3  xl:flex">
        <section className="text-center xl:w-1/2 xl:text-left">
          <p className="text-[15px] font-bold">
            HELLO <span className="text-[#29a587]">MY NAME IS</span>
          </p>
          <h1 className="textShadow m-0 py-4 text-[64px] text-[#29a587] sm:py-0 xl:text-[80px]">
            DANIEL <span className="text-white">ACOSTA</span>
          </h1>
          <p className="text-[15px] font-bold">
            I AM <span className="caveat pl-2 text-3xl">Web Developer</span>
          </p>
          <span className="hidden xl:block">
            <p className="pb-4 pt-4 text-lg text-[#262626] lg:w-4/5 dark:text-white">
              From Venezuela, Isla de Margarita. I have rich experience in web
              design, also I am good at TailwindCss. I love to talk with you
              about our unique
            </p>
            <div className="flex items-center gap-x-8 pb-6 text-[22px]">
              <FaTwitter />
              <FaDribbble />
              <FaBehance />
            </div>
            <div className="flex w-fit items-center pt-4 text-[13px] font-bold">
              <span className="shadowbtn block h-14 rounded-full border border-solid border-black">
                <button className="h-full rounded-full border-solid bg-transparent px-10 font-bold hover:border-2 hover:border-white hover:bg-[#29a587] hover:text-white dark:text-white">
                  DOWNLOAD CV
                </button>
              </span>
              <hr className="mr-6 h-[3px] w-10 bg-black" />
              <p>MY SKILLS</p>
            </div>
          </span>
        </section>
        <section className="xl:w-1/2">
          <div className="relative mt-16 flex h-96 w-full justify-center  sm:h-[680px] xl:mt-0 xl:block">
            <img
              src="./imagenPrincipal.png"
              alt="Imagen principal"
              className="absolute z-10 w-[340px] rounded-full bg-[#29a587] lg:w-auto"
            />

            <img
              src="./images/pat.svg"
              alt="pat"
              className="absolute right-40 top-6 hidden w-[180px] lg:block xl:right-20"
            />
            <div className="absolute bottom-20 left-0 z-10 lg:bottom-24 lg:left-40 xl:left-10">
              <div className="shadowbtn relative z-10 block h-14 w-fit rounded-full sm:h-20">
                <button className="relative z-10 flex h-full items-center justify-between gap-x-3 rounded-full border border-solid border-black bg-[#fefdfc] px-3 text-[13px] font-bold sm:px-6 lg:text-[37px]">
                  2 <strong className="text-[37px] text-[#29a587]">+</strong>
                  <span className="flex flex-col items-start text-[13px] leading-tight">
                    YEAR OF
                  </span>
                  <strong className="text-[#29a587]">EXPERIENCE</strong>
                </button>
                <img
                  src="./images/pat.svg"
                  alt="pat"
                  className="absolute -left-24 top-8 z-0 hidden w-[141px] lg:block"
                />
              </div>
            </div>
            <div className="absolute bottom-4 right-8 z-10 lg:bottom-12 lg:right-40 xl:right-14">
              <div className="shadowbtn relative z-10 block h-14 w-fit rounded-full sm:h-20">
                <button className="relative z-10 flex h-full items-center justify-between gap-x-3 rounded-full border border-solid border-black bg-[#fefdfc] px-3 text-[13px] font-bold sm:px-6 lg:text-[37px]">
                  10
                  <span className="fle-col flex items-start text-[13px] leading-none">
                    COMPLETED
                  </span>
                  <strong className="text-[#29a587]">PROJECTS</strong>
                </button>
                <img
                  src="./images/pat.svg"
                  alt="pat"
                  className="absolute -right-12 top-4 z-0 hidden w-[141px] lg:block"
                />
              </div>
            </div>
          </div>
        </section>
        <span className="flex flex-col items-center xl:hidden">
          <p className="pb-4 pt-4 text-lg text-[#262626] lg:w-4/5 dark:text-white">
            From Venezuela, Isla de Margarita. I have rich experience in web
            design, also I am good at TailwindCss. I love to talk with you about
            our unique
          </p>
          <div className="flex items-center gap-x-8 pb-6 text-[22px]">
            <FaTwitter />
            <FaDribbble />
            <FaBehance />
          </div>
          <div className="flex w-fit items-center pt-4 text-[13px] font-bold">
            <span className="shadowbtn block h-14 rounded-full border border-solid border-black">
              <button className="h-full rounded-full border-solid bg-transparent px-10 font-bold hover:border-2 hover:border-white hover:bg-[#29a587] hover:text-white dark:text-white">
                DOWNLOAD CV
              </button>
            </span>
            <hr className="mr-6 h-[3px] w-10 bg-black" />
            <p>MY SKILLS</p>
          </div>
        </span>
      </div>
    </main>
  );
};
