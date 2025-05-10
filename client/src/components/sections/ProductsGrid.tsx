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
    <div className="px-4">
      <div className="mb-8 flex justify-center">
        <h3
          className="relative text-3xl font-quicksand font-bold italic text-gray-700 inline-block 
            after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 
            after:-bottom-1 after:w-[60%] after:h-1 after:bg-green-500 after:rounded"
        >
          {title}
        </h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            imageSrc={product.imageSrc}
            imageAlt={product.imageAlt}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
