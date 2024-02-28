import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <section className="bg-black">
        <div className="relative -top-4 h-6 bg-wave-pattern bg-repeat-x"></div>
        <div className="container mx-auto w-2/3 py-10 text-center">
          <div className="pb-5">
            <Link
              to="CustomerSupport"
              className="group my-4 inline-block rounded-3xl border-8 border-transparent bg-red-500 px-16 py-2 font-black text-white transition duration-200 hover:border-gray-200 hover:bg-white hover:text-black xl:text-2xl"
            >
              Customer Support
              <span className="inline-block h-4 w-4 rotate-45 transform border-r-[5px] border-t-[5px] border-solid border-yellow-300 transition-all group-hover:border-red-500 xl:group-hover:ml-4"></span>
            </Link>
          </div>

          <div className="text-white">
            <p className="py-2">
              *Additional games, systems and/or accessories may be required for
              multiplayer mode
            </p>

            <p className="py-2">
              ** Nintendo Switch Online membership (sold separately) and
              Nintendo Account required for online features. Not available in
              all countries. Internet access required for online features. A
              Nintendo Account is required to receive and redeem My Nintendo
              points. Terms apply. nintendo.com/switch-online.{" "}
            </p>

            <p className="py-2">
              Game, systems, some accessories and amiibo sold separately. Visit
              amiibo.com for details on amiibo functionality.{" "}
            </p>

            <p className="py-2">
              Nintendo Switch Lite plays all games that support handheld mode.
            </p>

            <p className="py-2">
              ©2013-2021 Nintendo. Super Mario and Nintendo Switch are
              trademarks of Nintendo.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
