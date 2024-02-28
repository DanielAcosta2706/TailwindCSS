export const NewArticle = ({ tittle, text }) => {
  return (
    <article className="  h-[140px] border-b-2 border-GrayishBlue py-7 last:border-none lg:h-[160px] lg:py-4">
      <h2 className="mb-3 cursor-pointer text-[20px] font-bold hover:text-SoftOrange md:mb-2  md:text-base lg:text-[20px]">
        {tittle}
      </h2>
      <p className="text-[15px]">{text}</p>
    </article>
  );
};
