export const MainArticle = () => {
  return (
    <section className="mb-12 md:mb-0">
      <picture>
        <source
          media="(max-width:640px)"
          srcSet="./images/image-web-3-mobile.jpg"
        />
        <source
          media="(min-width:641px)"
          srcSet="./images/image-web-3-desktop.jpg"
        />
        <img
          src="./images/image-web-3-mobile.jpg"
          alt="Articulo principal Imagen"
        />
      </picture>
      <div className="sm:flex">
        <div className="flex-1 py-6">
          <h2 className="text-center text-[40px] font-bold leading-none sm:text-left sm:text-[58px]">
            The Bright Future of Web 3.0?
          </h2>
        </div>
        <div className=" flex flex-1 flex-col items-center justify-center px-4 pt-9 md:flex md:flex-col md:items-center">
          <p className="sm:text[15px] mb-10 text-[13px] sm:text-justify">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className=" h-[48px] w-[185px] bg-SoftRed uppercase text-OffWhite hover:bg-VeryDarkBlue ">
            Read more
          </button>
        </div>
      </div>
    </section>
  );
};
