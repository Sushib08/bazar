import React from "react";

interface CardProps {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  price: string;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  imageAlt = "produit",
  title,
  price,
}) => {
  return (
    <div className="group bg-gray-100 p-4 rounded shadow-md w-full max-w-xs mx-auto relative transition duration-300">
      <img src={imageSrc} alt={imageAlt} className="w-full h-auto mb-4" />
      <div className="text-center">
        <p className="text-lg font-semibold">{title}</p>
        <span className="text-green-600 font-bold">{price}</span>
      </div>

      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition duration-300 rounded">
        <button className="px-4 py-2 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600">
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};

export default Card;
