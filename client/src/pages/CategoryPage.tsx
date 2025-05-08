import React from "react";
import { useParams } from "react-router-dom";
import ProductsGrid from "../components/sections/ProductsGrid";

interface Product {
  id: number;
  title: string;
  price: string;
  imageSrc: string;
  imageAlt?: string;
}

// Produits simulés par catégorie (mock data)
const allProductsByCategory: { [key: string]: Product[] } = {
  cremerie: [
    {
      id: 1,
      title: "Fromage Brie",
      price: "4.50 €",
      imageSrc: "/images/products/fromage.webp",
    },
    {
      id: 2,
      title: "Lait Bio",
      price: "2.00 €",
      imageSrc: "/images/products/lait.webp",
    },
  ],
  charcuterie: [
    {
      id: 3,
      title: "Jambon de Pays",
      price: "6.00 €",
      imageSrc: "/images/products/charcuterie.webp",
    },
  ],
  boissons: [
    {
      id: 4,
      title: "Jus de Pomme",
      price: "3.20 €",
      imageSrc: "/images/products/boisson.webp",
    },
  ],
  "fruits-et-legumes": [
    {
      id: 5,
      title: "Tomates",
      price: "2.50 €",
      imageSrc: "/images/products/legumes.webp",
    },
  ],

  epicerie: [
    {
      id: 6,
      title: "Pâtes artisanales",
      price: "3.80 €",
      imageSrc: "/images/products/epicerie.webp",
    },
  ],
};

const formatTitle = (slug: string) => {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
};

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();

  const products = allProductsByCategory[category || ""] || [];

  return (
    <ProductsGrid title={formatTitle(category || "")} products={products} />
  );
};

export default CategoryPage;
