import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-very-dark-blue py-24 ">
      <section className="wrapper footer-area md:footer-area-md grid justify-items-center gap-12 ">
        <form className="flex w-full min-w-[100px] gap-4 [grid-area:form]">
          <input
            type="email"
            placeholder="Updates in your inbox..."
            className="min-w-[50px] flex-1 rounded-full px-4"
          />
          <input
            type="submit"
            value="GO"
            className="rounded-full bg-bright-red px-8 py-3 text-white"
          />
        </form>
        <nav className="grid w-4/5 grid-cols-[max-content_max-content] justify-between gap-y-4 text-white [grid-area:navigation]">
          <Link to="home">Home</Link>
          <Link to="princing">Pricing</Link>
          <Link to="products">Products</Link>
          <Link to="aboutUs">About Us</Link>
          <Link to="carrers">Careers</Link>
          <Link to="community">Community</Link>
          <Link to="privacyPolicy">Privacy Policy</Link>
        </nav>
        <section className="flex w-full flex-wrap justify-between gap-4 [grid-area:social-media]">
          <Link to="facebook">
            <img
              src="../../images/icon-facebook.svg"
              alt="LogoFacebook"
              className="w-8"
            />
          </Link>
          <Link to="youtube">
            <img
              src="../../images/icon-youtube.svg"
              alt="LogoYoutube"
              className="w-8"
            />
          </Link>
          <Link to="twitter">
            <img
              src="../../images/icon-twitter.svg"
              alt="LogoTwitter"
              className="w-8"
            />
          </Link>
          <Link to="printerest">
            <img
              src="../../images/icon-pinterest.svg"
              alt="LogoPinterest"
              className="w-8"
            />
          </Link>
          <Link to="instagram">
            <img
              src="../../images/icon-instagram.svg"
              alt="LogoInstagram"
              className="w-8"
            />
          </Link>
        </section>
        <Link to="inicio" href="#" className="[grid-area:logo]">
          <img src="../../images/logo.svg" alt="LogoFooter" />
        </Link>
        <p className="text-center text-dark-grayish-blue [grid-area:copy]">
          CopyRight 2020. All Rights Reserved
        </p>
      </section>
    </footer>
  );
};
