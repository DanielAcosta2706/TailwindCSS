import { NewArticle } from "./NewArticle";

export const NewContainer = () => {
  return (
    <aside className="flex:none bg-VeryDarkBlue px-[20px] py-[28px] text-OffWhite md:w-[600px] md:px-2 md:py-1">
      <h1 className="text-4xl font-bold text-SoftOrange">New</h1>
      <NewArticle
        tittle=" Hydrogen VS Electric Cars"
        text="Will hydrogen-fueled cars ever catch up to EVs?"
      />
      <NewArticle
        tittle="The Downsides of AI Artistry"
        text="What are the possible adverse effects of  "
      />
      <NewArticle
        tittle="Is VC Funding Drying Up?"
        text=" Private funding by VC firms is down 50% YOY. We take a look at what that means."
      />
    </aside>
  );
};
