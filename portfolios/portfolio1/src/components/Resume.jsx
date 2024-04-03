import { Education, Experience } from "./accordion";

export const Resume = () => {
  return (
    <main
      className="bg-[#f0ebe3] px-3 pb-5 pt-52 dark:bg-[#1f2937]"
      id="resume"
    >
      <div className="container mx-auto flex max-w-[1200px] flex-col items-center">
        <h1 className="m-0 text-center text-[26px] sm:text-[44px]">RESUME</h1>
        <p className="flex items-center gap-x-4 text-center text-sm font-bold text-[#29a587]">
          My <span className="caveat text-3xl text-black">Story</span>
        </p>
        <div className="w-full gap-x-20 lg:flex">
          <section className="lg:w-1/2">
            <h1 className="m-0 mr-[30px] border-0 border-b-2 border-solid border-black pb-[30px] text-center text-2xl font-bold">
              Education
            </h1>
            <Education />
          </section>
          <section className="mt-8 lg:mt-0 lg:w-1/2">
            <h1 className="m-0 mr-[30px] border-0 border-b-2 border-solid border-black pb-[30px] text-center text-2xl font-bold">
              Experience
            </h1>
            <Experience />
          </section>
        </div>
      </div>
    </main>
  );
};
