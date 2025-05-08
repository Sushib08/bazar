import React, { useEffect, useState } from "react";
import HighlightCard from "../components/elements/HighlightCard";
import Card from "../components/elements/Card";
import Partners from "../components/sections/Partners";

const allProducts = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  imageSrc: "./images/home/fraises.webp",
  imageAlt: "fraises",
  title: `Gariguettes ${i + 1}`,
  price: "3.5€",
}));

const getCardsPerRow = (width: number) => {
  if (width >= 1024) return 4;
  if (width >= 768) return 3;
  if (width >= 640) return 2;
  return 1;
};

const Home: React.FC = () => {
  const [cardsPerRow, setCardsPerRow] = useState(
    getCardsPerRow(window.innerWidth)
  );
  const [visibleCount, setVisibleCount] = useState(cardsPerRow * 2);

  useEffect(() => {
    const updateLayout = () => {
      const newCardsPerRow = getCardsPerRow(window.innerWidth);
      setCardsPerRow(newCardsPerRow);
      setVisibleCount(newCardsPerRow * 2);
    };

    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const loadMore = () => {
    setVisibleCount((prev) => prev + cardsPerRow * 2);
  };

  return (
    <div>
      {/* Promo section */}
      <div className="my-12 mx-4 md:mx-12 flex flex-col md:flex-row justify-between gap-12">
        <HighlightCard
          label="Promo"
          title={"Spécial Promo Mai\nSur Les Fruits De Saison"}
          imageSrc="./images/home/fruits.webp"
          imageAlt="fruits"
        />
        <HighlightCard
          label="Nouveautés"
          title={"Nouveaux produits\nLes Gariguettes"}
          imageSrc="./images/home/fraises.webp"
          imageAlt="fraises"
        />
      </div>

      {/* Section title */}
      <div className="mb-8 flex justify-center">
        <h3
          className="relative text-3xl font-quicksand font-bold italic text-gray-700 inline-block 
          after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 
          after:-bottom-1 after:w-[60%] after:h-1 after:bg-green-500 after:rounded"
        >
          Tous Nos Produits
        </h3>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto px-4 justify-items-center">
        {allProducts
          .slice(0, visibleCount)
          .map(({ id, imageSrc, imageAlt, title, price }) => (
            <Card
              key={id}
              imageSrc={imageSrc}
              imageAlt={imageAlt}
              title={title}
              price={price}
            />
          ))}
      </div>

      {/* Load more */}
      {visibleCount < allProducts.length && (
        <div className="flex justify-center my-8">
          <button
            onClick={loadMore}
            className="px-6 py-2 border border-green-500 text-green-500 rounded-full hover:bg-green-500 hover:text-white transition"
          >
            Voir plus
          </button>
        </div>
      )}

      <div className="mb-8 flex justify-center">
        <h3
          className="relative text-3xl font-quicksand font-bold italic text-gray-700 inline-block 
          after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 
          after:-bottom-1 after:w-[60%] after:h-1 after:bg-green-500 after:rounded"
        >
          Nos Partenaires
        </h3>
      </div>
      <Partners />
    </div>
  );
};

export default Home;
