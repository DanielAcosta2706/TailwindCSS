export const Text = ({ title, text, color, order }) => {
  return (
    <div
      className={`${order} tablet:h-auto desktop:text-left desktop:pl-[165px] desktop:py-[140px] desktop:pr-[105px] flex h-[437px] flex-col place-content-around px-6 py-6 text-center lg:px-[65px]`}
    >
      <h2 className="tablet:text-[1.25rem] desktop:leading-tight font-Fraunces text-[2rem] font-bold lg:text-[2.5rem]">
        {title}
      </h2>
      <p className="tablet:text-[0.8rem] tablet:leading-[1.5rem]  font-Barlow text-[1.125rem] leading-[1.875rem] text-Dark-grayish-blue lg:text-[18px]">
        {text}
      </p>
      <div className="relative">
        <button className="lg:text-1xl font-Barlow font-bold uppercase">
          Learn More
        </button>
        <div
          className={`h-[10px] w-[137px] ${color} desktop:mx-0 desktop:left-[-10px] absolute bottom-0 left-0 right-0 -z-10 mx-auto rounded-full bg-opacity-25`}
        ></div>
      </div>
    </div>
  );
};
