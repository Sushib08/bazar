import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { slugify } from "../../utils/slugify";

interface Category {
  _id: string;
  title: string;
  imageSrc: string;
  imageAlt?: string;
}

const CategoriesGrid: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/categories");
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <>
      <div className="mb-8 flex justify-center">
        <h3
          className="relative text-3xl font-quicksand font-bold italic text-gray-700 inline-block 
            after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 
            after:-bottom-1 after:w-[60%] after:h-1 after:bg-green-500 after:rounded"
        >
          Nos Produits
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto px-4 justify-items-center">
        {categories.map(({ _id, imageSrc, imageAlt, title }) => (
          <Link
            key={_id}
            to={`/produits/${slugify(title)}`}
            className="relative w-full max-w-sm overflow-hidden shadow-md rounded-lg hover:scale-105 transition-transform"
          >
            <img
              src={imageSrc}
              alt={imageAlt || title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <span className="text-white text-xl font-semibold">{title}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default CategoriesGrid;
