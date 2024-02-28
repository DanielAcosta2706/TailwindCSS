import { Link } from "react-router-dom";

export const SectionImg = () => {
  return (
    <>
      <section className="bg-pattern-characters-red  flex justify-center gap-9 pb-[100px] pt-10 text-center">
        <img
          src="img/coin.gif"
          alt="Coin"
          className="h-[50px] w-[50px] sm:h-[80px]"
        />
        <img
          src="img/coin.gif"
          alt="Coin"
          className="h-[50px] w-[50px] sm:h-[80px]"
        />
        <img
          src="img/coin.gif"
          alt="Coin"
          className="h-[50px] w-[50px] sm:h-[80px]"
        />
        <img
          src="img/coin.gif"
          alt="Coin"
          className="hidden h-[50px] w-[50px] sm:block sm:h-[80px]"
        />
        <img
          src="img/coin.gif"
          alt="Coin"
          className="hidden h-[50px] w-[50px] sm:block sm:h-[80px]"
        />
        <img
          src="img/coin.gif"
          alt="Coin"
          className="hidden h-[50px] w-[50px] sm:block sm:h-[80px]"
        />
      </section>
      <section className="bg-yellow-dots ">
        <div className="bg-wave-pink relative -top-4 h-6 bg-repeat-x"></div>
        <div className="xsm:w-full mx-auto w-2/3 items-center justify-center py-6 text-center sm:container md:flex">
          <div className="left p-5 lg:w-1/2 xl:w-1/3">
            <h3 className="xsm:text-3xl font-black  text-yellow-900 sm:text-4xl">
              Cat <br /> Transformation <br /> Center
            </h3>
            <p className="py-4 text-xl">
              We are not kitten-transform into a cat-tastic new you!
            </p>
            <p>
              <Link to="Meow" className="button group">
                Meow <span className="arrow arrow-group"></span>
              </Link>
            </p>
          </div>
          <div className="right lg:w-1/2 xl:w-1/3">
            <img
              src="img/activity_img3.png"
              alt="ImgFooter"
              className="md:w-full "
            />
          </div>
        </div>
      </section>
    </>
  );
};
