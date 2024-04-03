export const Testimonials = () => {
  const Card = ({ name, job, image }) => {
    return (
      <div className="hoverBtn">
        <div className="relative overflow-hidden rounded-[20px] bg-white px-[30px] py-[30px]">
          <div className="relative">
            <img
              src="./images/pat2.png"
              alt="pat"
              className="absolute z-10 w-10 "
            />
            <img
              src={image}
              alt="testimonial"
              className="h-[180px] w-[100%] rounded-[18px] object-contain"
            />
          </div>
          <p className="my-[30px] text-justify leading-[1.7rem] text-[#262626] opacity-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            accusamus aut incidunt saepe, numquam eius alias minus nemo
            explicabo officia, voluptas odit molestiae. Sapiente impedit eos
            quam facilis consectetur officiis?
          </p>
          <span>
            <p className="text-[21px] font-bold">{name}</p>
            <p className="text-[#262626]">{job}</p>
          </span>
          <div className="absolute -bottom-6 -right-6 h-[131px] w-[131px] bg-[url(./images/pat.svg)] bg-contain bg-center"></div>
        </div>
      </div>
    );
  };
  return (
    <main
      className="bg-[#f0ebe3] px-3 pb-5 pt-52 dark:bg-[#1f2937]"
      id="testimonials"
    >
      <div className="container mx-auto max-w-[1200px]">
        <h1 className="m-0 text-center text-[26px] sm:text-[44px]">
          TESTIMONIALS
        </h1>
        <p className="flex items-center justify-center gap-x-4 text-center text-sm font-bold text-[#29a587]">
          WHAT<span className="caveat text-3xl text-black">Customers Say</span>
        </p>
        <section className="sm-grid-cols-2 mt-[60px] grid w-full grid-cols-1 gap-10 lg:grid-cols-3">
          <Card
            name="Barbara Wilson"
            job="CEO Company"
            image="https://luique.bslthemes.com/wp-content/uploads/2022/09/testi4-2.jpg"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam cum
          culpa cumque rem suscipit ex assumenda nisi nobis. Magnam consequuntur
          veritatis suscipit deleniti numquam ea similique adipisci iure eveniet
          enim?"
          />
          <Card
            name="Charlie Smith"
            job="Designer"
            image="https://luique.bslthemes.com/wp-content/uploads/2022/09/testi4-1.jpg"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam cum
          culpa cumque rem suscipit ex assumenda nisi nobis. Magnam consequuntur
          veritatis suscipit deleniti numquam ea similique adipisci iure eveniet
          enim?"
          />
          <Card
            name="Roy Wang"
            job="Manager GYM"
            image="https://luique.bslthemes.com/wp-content/uploads/2022/09/testi4-4.jpg"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam cum
          culpa cumque rem suscipit ex assumenda nisi nobis. Magnam consequuntur
          veritatis suscipit deleniti numquam ea similique adipisci iure eveniet
          enim?"
          />
        </section>
      </div>
    </main>
  );
};
