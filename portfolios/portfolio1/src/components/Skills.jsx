// import { Slider } from "rc-slider";
// import "rc-slider/assets/index.css";

export const Skills = () => {
  const Card = ({ title, percentage }) => {
    return (
      <div className="w-full">
        <span className="flex w-full items-center justify-between">
          <p className="m-0 text-[21px] font-bold">{title}</p>
          <p className="font-bold">
            {percentage} <span className="text-[#29a587]">%</span>
          </p>
        </span>
        <p className="pb-6 text-justify text-[#262626] dark:text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          ipsam ea incidunt provident aliquam placeat voluptate nulla voluptates
          maiores illo! Optio officiis ullam, consectetur blanditiis labore
          obcaecati excepturi unde eum.
        </p>
        {/* <div>
          <Slider
            draggableTrack={true}
            min={0}
            max={100}
            defaultValue={percentage}
          />
        </div> */}
      </div>
    );
  };
  return (
    <main className="bg-[#f0ebe3] px-3 pt-52 dark:bg-[#1f2937]" id="skills">
      <div className="container mx-auto flex max-w-[1200px] flex-col items-center">
        <h1 className="m-0 text-center text-[26px] sm:text-[44px]">
          PROFESSIONAL SKILLS
        </h1>
        <p className="flex items-center gap-x-4 text-center text-sm font-bold text-[#29a587]">
          My <span className="caveat text-3xl text-black">Talent</span>
        </p>
        <section className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
          <Card title="PHP" percentage="85" />
          <Card title="JavaScript" percentage="75" />
          <Card title="WordPress" percentage="90" />
          <Card title="Python" percentage="75" />
          <Card title="React" percentage="70" />
          <Card title="Adobe XD" percentage="80" />
        </section>
      </div>
    </main>
  );
};
