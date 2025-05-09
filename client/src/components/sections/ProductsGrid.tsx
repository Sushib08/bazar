import React from "react";
import Card from "../elements/Card";

interface Product {
  id: string;
  imageSrc: string;
  imageAlt?: string;
  title: string;
  price: string;
}

interface ProductsGridProps {
  title: string;
  products: Product[];
}

const ProductsGrid: React.FC<ProductsGridProps> = ({ title, products }) => {
  return (
    <>
      <div className="mb-8 flex justify-center">
        <h3
          className="relative text-3xl font-quicksand font-bold italic text-gray-700 inline-block 
          after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 
          after:-bottom-1 after:w-[60%] after:h-1 after:bg-green-500 after:rounded"
        >
          {title}
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto px-4 justify-items-center">
        {products.map(({ id, imageSrc, imageAlt, title, price }) => (
          <Card
            key={id}
            imageSrc={imageSrc}
            imageAlt={imageAlt}
            title={title}
            price={price}
          />
        ))}
      </div>
    </>
  );
};

export default ProductsGrid;
