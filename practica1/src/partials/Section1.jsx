import { Link } from "react-router-dom";

export const Section1 = () => {
  return (
    <section className="wrapper grid items-center justify-items-center gap-8 pb-12 md:grid-cols-2 md:py-24 ">
      <img
        src="../../images/illustration-intro.svg"
        alt="ImagenPrincipal"
        className="w-full max-w-lg md:order-1"
      />
      <article className="space-y-6 text-center md:space-y-8 md:text-left">
        <h1 className="text-4xl font-bold text-very-dark-blue md:text-5xl">
          Bring everyone together to build better products.
        </h1>
        <p className="text-dark-grayish-blue">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <Link
          to="getStarted"
          href="#"
          className="button mx-auto shadow-xl shadow-bright-red/30 md:mx-0"
        >
          Get Started
        </Link>
      </article>
    </section>
  );
};
