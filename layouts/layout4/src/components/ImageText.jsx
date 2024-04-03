export const ImageText = ({ imgMobile, imgDesktop, title, text, order }) => {
  return (
    <div className="relative order-5 pt-[398px] sm:pt-[350px] tablet:pt-[150px] md:pt-[160px] lg:pt-[250px] xl:pt-[350px] desktop:pt-[398px]">
      <picture className="absolute top-0 z-[-1]">
        <source media="(max-width:639px)" srcSet={imgMobile} />
        <source media="(min-width:640px)" srcSet={imgDesktop} />
        <img src={imgMobile} alt="Imagen principal" />
      </picture>
      <h2 className="mb-7 text-center font-Fraunces text-[28px] font-bold text-Dark-desaturated-cyan">
        {title}
      </h2>
      <p className="mx-3 mb-[60px] text-center font-Barlow text-Dark-desaturated-cyan tablet:text-sm lg:mx-auto lg:w-[300px]">
        {text}
      </p>
    </div>
  );
};
