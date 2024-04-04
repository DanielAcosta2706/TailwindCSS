import { BiBarcode } from "react-icons/bi";

export const Contact = () => {
  const Contact_info = ({ icon, title, sub_title }) => {
    return (
      <div className="flex pb-10 lg:gap-x-10">
        <span className="flex w-fit items-center">
          <button className="shadowbtn h-14 w-14 rounded-full border-solid bg-transparent font-bold">
            <span className="flex justify-center text-2xl text-[#262626] dark:text-white">
              {icon}
            </span>
          </button>
          <hr className=" h-[2px] w-10 bg-black" />
        </span>
        <span>
          <p className="caveat m-0 py-[10px] text-[30px] font-bold">{title}</p>
          <p className="m-0 text-[#262626] dark:text-white">{sub_title}</p>
        </span>
      </div>
    );
  };
  return (
    <main
      className="dark:bg-[#1f2937 bg-[#f0ebe3] px-3 py-16 pb-5 lg:py-52"
      id="contact"
    >
      <div className="container mx-auto max-w-[1200px] flex-col items-center lg:flex">
        <h1 className="m-0 text-center text-[26px] sm:text-[44px]">
          CONTACT ME
        </h1>
        <p className="flex items-center justify-center gap-x-4 text-center text-sm font-bold text-[#29a587]">
          LETS
          <span className="caveat text-3xl text-black">Talk About Ideas</span>
        </p>
        <div className="mx-auto w-full justify-between lg:flex lg:pt-24 xl:w-4/5 xl:justify-normal">
          <section className="pt-8 lg:pt-[60px] xl:w-2/5">
            <div className="flex flex-wrap gap-x-4 lg:block">
              <Contact_info
                title="Address"
                sub_title="North Tower, Toronto, Canada"
                icon={<BiBarcode />}
                // icon={<MdMap />}
              />
              <Contact_info
                title="Freelance"
                sub_title="Available Right Now"
                icon={<BiBarcode />}
                // icon={<MdMap />}
              />
              <Contact_info
                title="Email"
                sub_title="zoe.miller@mydomain.com"
                icon={<BiBarcode />}
                // icon={<MdMap />}
              />
              <Contact_info
                title="Phone"
                sub_title="+1 900 - 800 - 7000"
                icon={<BiBarcode />}
                // icon={<MdMap />}
              />
            </div>
          </section>
          <section className="xl:w-1/2">
            <form className="w-full">
              <div className="mb-8 w-full gap-x-8  sm:flex">
                <label className="flex w-full flex-col gap-4">
                  <p className="pl-12 text-sm font-bold text-[#262626] dark:text-white">
                    YOUR FULL NAME *
                  </p>
                  <input
                    type="text"
                    className="h-[60px] rounded-full border border-solid border-black px-4 outline-none"
                  />
                </label>
                <label className="flex w-full flex-col gap-4">
                  <p className="pl-12 text-sm font-bold text-[#262626] dark:text-white">
                    YOUR EMAIL ADDRESS *
                  </p>
                  <input
                    type="email"
                    className="h-[60px] rounded-full border border-solid border-black px-4 outline-none"
                  />
                </label>
              </div>
              <label className="mb-8 flex w-full flex-col gap-4 ">
                <p className="pl-12 text-sm font-bold text-[#262626] dark:text-white">
                  YOUR SUBJECT *
                </p>
                <input
                  type="text"
                  className="h-[60px] rounded-full border border-solid border-black px-8 outline-none"
                />
              </label>
              <label className="mb-8 flex w-full flex-col gap-4">
                <p className="pl-12 text-sm font-bold text-[#262626] dark:text-white">
                  YOUR MESSAGE *
                </p>
                <textarea className="h-[140px] resize-none rounded-[30px] border border-solid border-black p-8 outline-none" />
              </label>
              <div className="flex flex-col items-end justify-end gap-8 sm:flex-row sm:items-center">
                <label className="flex cursor-pointer items-center gap-x-2">
                  <p>Accept the terms and conditions</p>
                  <input type="checkbox" />
                </label>
                <span className="shadowbtn block h-14 rounded-full border border-solid border-black">
                  <button className="h-full rounded-full border-solid bg-transparent px-10 font-bold hover:border-2 hover:border-white hover:bg-[#29a587] hover:text-white dark:text-white">
                    SEND MESSAGE
                  </button>
                </span>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
};
