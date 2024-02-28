import { useEffect, useState } from "react";
import { Article } from "./Article";

//
const apiKey = "a72213c8e55c47188ee952f90113dd8b";
//

export const ArticlesContainer = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
      .then((res) => res.json())
      .then((data) => setArticles(data.articles));
  }, []);
  return (
    <section className="mt-6 md:flex md:flex-wrap md:place-content-between md:justify-center md:gap-10">
      <Article
        img="./images/image-retro-pcs.jpg"
        number="01"
        tittle="  Reviving Retro PCs"
        text="What happens when old PCs are given modern upgrades?"
      />
      <Article
        img="./images/image-top-laptops.jpg"
        number="02"
        tittle="Top 10 Laptops of 2022"
        text="Our best picks for various needs and budgets."
      />
      <Article
        img="./images/image-gaming-growth.jpg"
        number="03"
        tittle="The Growth of Gaming"
        text="How the pandemic has sparked fresh opportunities."
      />
    </section>
  );
};
