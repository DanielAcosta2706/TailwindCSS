import { Link } from "react-router-dom";

export const Section3 = () => {
  return (
    <main>
      <section className="wrapper mx-auto max-w-lg py-24 text-center md:text-left">
        <h2 className="text-3xl font-bold text-very-dark-blue md:text-4xl">
          What they have said
        </h2>
        <section className="mb-14 mt-24">
          <article className="relative bg-vary-light-gray px-4 pb-12 pt-16">
            <img
              src="../../images/avatar-ali.png"
              alt="FotoAli"
              className="absolute inset-x-0 -top-12 mx-auto aspect-square w-24"
            />
            <h3 className="mb-4 pt-2 text-xl font-bold text-very-dark-blue">
              Ali Bravo
            </h3>
            <p className="text-dark-grayish-blue">
              We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more fosuded.
            </p>
          </article>
        </section>
        <Link
          to="getStarted"
          className=" button mx-auto shadow-xl shadow-bright-red/30 "
        >
          Get Started
        </Link>
      </section>
    </main>
  );
};
