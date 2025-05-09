import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsGrid from "../components/sections/ProductsGrid";
import LoadMoreButton from "../components/elements/LoadMoreButton";

interface FetchedProduct {
  id: string;
  imageSrc: string;
  imageAlt?: string;
  title: string;
  price: string;
}

const formatTitle = (slug: string) => {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
};

const getCountPerLoad = (width: number) => {
  return width < 1024 ? 6 : 8;
};

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [products, setProducts] = useState<FetchedProduct[]>([]);
  const [visibleCount, setVisibleCount] = useState(
    getCountPerLoad(window.innerWidth)
  );
  const [countPerLoad, setCountPerLoad] = useState(
    getCountPerLoad(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => {
      const newCount = getCountPerLoad(window.innerWidth);
      setCountPerLoad(newCount);
      setVisibleCount(newCount);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!category) return;

    fetch(`http://localhost:5000/api/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        const formattedProducts = data.map((product: any) => ({
          id: product._id,
          imageSrc: product.imageSrc,
          imageAlt: product.imageAlt || "",
          title: product.title,
          price: `${product.price.toFixed(2)} €`,
        }));
        setProducts(formattedProducts);
        setVisibleCount(countPerLoad);
      })
      .catch((err) => console.error("Erreur API :", err));
  }, [category, countPerLoad]);

  const loadMore = () => {
    setVisibleCount((prev) => prev + countPerLoad);
  };

  return (
    <div className="py-10">
      <ProductsGrid
        title={formatTitle(category || "")}
        products={products.slice(0, visibleCount)}
      />
      <LoadMoreButton
        onClick={loadMore}
        isVisible={visibleCount < products.length}
      />
    </div>
  );
};

export default CategoryPage;
