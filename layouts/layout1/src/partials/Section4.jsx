import { Link } from "react-router-dom";

export const Section4 = () => {
  return (
    <main className="bg-bright-red font-bold">
      <section className="wrapper grid gap-6 py-24 text-center md:grid-cols-[40%_40%] md:items-center md:justify-between md:text-left">
        <h2 className="text-4xl text-very-pale-red">
          Simplify how your team works today.
        </h2>
        <Link
          to="getStarted"
          className="button mx-auto bg-vary-light-gray text-bright-red md:mx-0 md:justify-self-end"
        >
          Get Started
        </Link>
      </section>
    </main>
  );
};
