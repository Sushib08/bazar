import React, { useEffect, useState } from "react";
import HighlightCard from "../components/elements/HighlightCard";
import Partners from "../components/sections/Partners";
import LoadMoreButton from "../components/elements/LoadMoreButton";
import ProductsGrid from "../components/sections/ProductsGrid";

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

      {/* Product grid section */}
      <ProductsGrid
        title="Tous Nos Produits"
        products={allProducts.slice(0, visibleCount)}
      />

      {/* Load more button */}
      <LoadMoreButton
        onClick={loadMore}
        isVisible={visibleCount < allProducts.length}
      />

      {/* Partner section */}
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
