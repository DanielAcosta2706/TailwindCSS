export const Article = ({ img, number, tittle, text }) => {
  return (
    <article className="flex h-[162px] md:w-[343px] md:flex-grow">
      <div className="w-[100px] flex-none">
        <img src={img} alt="" />
      </div>
      <div className="pl-6">
        <p className="mb-[18px] text-3xl font-bold text-GrayishBlue">
          {number}
        </p>
        <h2 className="mb-[18px] cursor-pointer font-bold hover:text-SoftOrange sm:text-[14px]">
          {tittle}
        </h2>
        <p className=" sm:[13px] text-[14px] text-DarkGrayishBlue">{text}</p>
      </div>
    </article>
  );
};
