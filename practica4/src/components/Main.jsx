import imgMobile from "../assets/images/mobile/image-header.jpg";
import imgDesktop from "../assets/images/desktop/image-header.jpg";
import arrow from "../assets/images/icon-arrow-down.svg";

export const Main = () => {
  return (
    <section>
      <picture>
        <source media="(max-width:639px)" srcSet={imgMobile} />
        <source media="(min-width:640px)" srcSet={imgDesktop} />
        <img src={imgMobile} alt="Imagen principal" />
      </picture>
      <p className="absolute left-0 right-0 top-[144px] mx-auto w-[325px] text-center font-Fraunces text-[40px] uppercase tracking-[6.25px] text-white sm:w-[600px]">
        We are creatives
      </p>
      <img
        src={arrow}
        alt=""
        className="absolute left-0 right-0 top-[294px] mx-auto sm:top-[220px]"
      />
    </section>
  );
};
