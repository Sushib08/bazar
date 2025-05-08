import React from "react";

interface Category {
  id: number;
  imageSrc: string;
  imageAlt?: string;
  title: string;
}

const categories: Category[] = [
  {
    id: 1,
    title: "Fruits & Légumes",
    imageSrc: "./images/products/legumes.webp",
  },
  {
    id: 2,
    title: "Crèmerie",
    imageSrc: "./images/products/fromage.webp",
  },
  {
    id: 3,
    title: "Charcuterie",
    imageSrc: "./images/products/charcuterie.webp",
  },
  {
    id: 4,
    title: "Boissons",
    imageSrc: "./images/products/boisson.webp",
  },
  {
    id: 5,
    title: "Epicerie",
    imageSrc: "./images/products/epicerie.webp",
  },
];

const CategoriesGrid: React.FC = () => {
  return (
    <>
      {/* Titre */}
      <div className="mb-8 flex justify-center">
        <h3
          className="relative text-3xl font-quicksand font-bold italic text-gray-700 inline-block 
          after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 
          after:-bottom-1 after:w-[60%] after:h-1 after:bg-green-500 after:rounded"
        >
          Nos Produits
        </h3>
      </div>

      {/* Grille de catégories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto px-4 justify-items-center">
        {categories.map(({ id, imageSrc, imageAlt, title }) => (
          <div
            key={id}
            className="relative w-full max-w-sm overflow-hidden shadow-md"
          >
            <img
              src={imageSrc}
              alt={imageAlt || title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <span className="text-white text-xl font-semibold">{title}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoriesGrid;
