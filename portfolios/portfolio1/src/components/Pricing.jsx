import { FaArrowRight, FaCheck } from "react-icons/fa";

export const Pricing = () => {
  const Card = ({ amount, duration, title, children }) => {
    return (
      <div className="hoverBtn relative">
        <div
          className={`${
            title === "FREELANCING" && "border-2 border-solid"
          } relative overflow-hidden rounded-[20px] bg-white px-[35px] py-[30px] dark:text-black`}
        >
          <p className="m-0 mb-[15px] text-[13px] font-bold">{title}</p>
          <div className="my-5 flex items-center gap-x-4">
            <p className="m-0 text-[30px] font-bold dark:text-black">
              {amount}
            </p>
            <p className="m-0 font-bold">{duration}</p>
          </div>
          <p className="mb-[30px] text-justify leading-[1.7rem] text-[#262626] opacity-80">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
            temporibus, dolor accusantium id possimus reprehenderit sequi,
            recusandae labore aliquam magnam perferendis quibusdam iste?
            Molestias fugiat excepturi adipisci ipsa temporibus ipsam?
          </p>
          {children}
          <span className="shadowbtn mt-8 block h-14 rounded-full border-2 border-solid border-black">
            <button className="relative z-10 flex h-full w-full cursor-pointer items-center justify-center rounded-full border-2 border-solid border-white bg-[#29a587] px-10 font-bold text-white">
              START PROJECT
              <FaArrowRight className="absolute right-8 text-white" />
            </button>
          </span>
          <div className="absolute -bottom-6 -right-6 z-20 h-[131px] w-[131px] bg-[url(./images/pat.svg)] bg-contain bg-center"></div>
        </div>
        {title === "FREELANCING" && (
          <button className="shadowbtn absolute -top-3 right-8 z-20 h-[26px] rounded-full border-solid bg-[#29a587] px-[15px] text-[13px] font-bold text-white">
            POPULAR
          </button>
        )}
      </div>
    );
  };
  return (
    <main
      className="bg-[#f0ebe3] px-3 pb-5 pt-52 dark:bg-[#1f2937]"
      id="pricing"
    >
      <div className="container mx-auto flex max-w-[1200px] flex-col items-center">
        <h1 className="m-0 text-center text-[26px] sm:text-[44px]">PRICING</h1>
        <p className="flex items-center gap-x-4 text-center text-sm font-bold text-[#29a587]">
          MY <span className="caveat text-3xl text-black">Price Board</span>
        </p>
        <section className="mt-[60px] grid w-full grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <Card amount="39" title="HOURLEY BASIS" duration="hour">
            <div>
              <span className="flex items-center gap-x-4">
                <FaCheck className="text-[#29a587]" />
                <p className="text-[#262626]">Brand Design</p>
              </span>
              <span className="flex items-center gap-x-4">
                <FaCheck className="text-[#29a587]" />
                <p className="text-[#262626]">Web Development</p>
              </span>
              <span className="flex items-center gap-x-4">
                <p className="pl-[30px] text-[#b3b3b3] line-through">
                  Advertising
                </p>
              </span>
              <span className="flex items-center gap-x-4">
                <p className="pl-[30px] text-[#b3b3b3] line-through">
                  Photography
                </p>
              </span>
            </div>
          </Card>
          <Card amount="259" title="FREELANCING" duration="Week">
            <div>
              <span className="flex items-center gap-x-4">
                <FaCheck className="text-[#29a587]" />
                <p className="text-[#262626]">Brand Design</p>
              </span>
              <span className="flex items-center gap-x-4">
                <FaCheck className="text-[#29a587]" />
                <p className="text-[#262626]">Web Development</p>
              </span>
              <span className="flex items-center gap-x-4">
                <FaCheck className="text-[#29a587]" />
                <p className="text-[#262626]">Advertising</p>
              </span>
              <span className="flex items-center gap-x-4">
                <p className="pl-[30px] text-[#b3b3b3] line-through">
                  Photography
                </p>
              </span>
            </div>
          </Card>
          <Card amount="1.249" title="FULL TIME" duration="month">
            <div>
              <span className="flex items-center gap-x-4">
                <FaCheck className="text-[#29a587]" />
                <p className="text-[#262626]">Brand Design</p>
              </span>
              <span className="flex items-center gap-x-4">
                <FaCheck className="text-[#29a587]" />
                <p className="text-[#262626]">Web Development</p>
              </span>
              <span className="flex items-center gap-x-4">
                <FaCheck className="text-[#29a587]" />
                <p className="text-[#262626]">Advertising</p>
              </span>
              <span className="flex items-center gap-x-4">
                <FaCheck className="text-[#29a587]" />
                <p className="text-[#262626] ">Photography</p>
              </span>
            </div>
          </Card>
        </section>
      </div>
    </main>
  );
};
