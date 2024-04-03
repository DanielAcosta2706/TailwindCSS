import { Link } from "react-router-dom";

export const MainButtons = () => {
  return (
    <section className="mt-10">
      <div className="relative -top-2 h-6 bg-wave-pattern bg-repeat-x"></div>
      <div className="flex flex-col justify-center gap-3 bg-wave-pattern-dots p-4 text-center md:flex-row">
        <Link
          to="BuyNow"
          className="inlne-block rounded-3xl border-8 border-transparent bg-black px-16 py-3 text-2xl font-bold text-white  transition duration-200 hover:border-gray-200 hover:bg-white hover:text-black"
        >
          Buy Now
        </Link>
        <Link
          to="WatchTrailer"
          className="inlne-block rounded-3xl border-8 border-transparent bg-red-500 px-16 py-3 text-2xl font-bold text-white  transition duration-200 hover:border-gray-200 hover:bg-white hover:text-black"
        >
          Warch the trailer
        </Link>
      </div>
      <div className="relative top-2 h-6 bg-wave-pattern bg-repeat-x"></div>
    </section>
  );
};
