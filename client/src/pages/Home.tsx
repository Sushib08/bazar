import React, { useEffect, useState } from "react";
import HighlightCard from "../components/elements/HighlightCard";
import Partners from "../components/sections/Partners";
import LoadMoreButton from "../components/elements/LoadMoreButton";
import ProductsGrid from "../components/sections/ProductsGrid";

interface Product {
  id: string;
  imageSrc: string;
  imageAlt?: string;
  title: string;
  price: string;
}

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
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const handleResize = () => {
      const newCardsPerRow = getCardsPerRow(window.innerWidth);
      setCardsPerRow(newCardsPerRow);
      setVisibleCount(newCardsPerRow * 2);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((product: any) => ({
          id: product._id,
          imageSrc: product.imageSrc,
          imageAlt: product.imageAlt || "",
          title: product.title,
          price: `${product.price.toFixed(2)} €`,
        }));
        setProducts(formatted);
      })
      .catch((err) =>
        console.error("Erreur lors du chargement des produits :", err)
      );
  }, []);

  const loadMore = () => {
    setVisibleCount((prev) => prev + cardsPerRow * 2);
  };

  return (
    <div>
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

      <ProductsGrid
        title="Tous Nos Produits"
        products={products.slice(0, visibleCount)}
      />

      <LoadMoreButton
        onClick={loadMore}
        isVisible={visibleCount < products.length}
      />

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
