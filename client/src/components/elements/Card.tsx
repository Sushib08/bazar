import React from "react";
import { useUser } from "../../contexts/UserContext";
import { useAppDispatch } from "../../redux/hooks";
import { addToCartAsync } from "../../redux/cartSlice";

interface CardProps {
  id: string;
  imageSrc: string;
  imageAlt?: string;
  title: string;
  price: string;
}

const Card: React.FC<CardProps> = ({
  id,
  imageSrc,
  imageAlt = "produit",
  title,
  price,
}) => {
  const dispatch = useAppDispatch();

  const { user } = useUser();

  const handleAdd = () => {
    if (!user) {
      alert("Veuillez vous connecter pour ajouter un produit au panier.");
      return;
    }

    dispatch(
      addToCartAsync({
        id,
        name: title,
        price: parseFloat(price),
        image: imageSrc,
        quantity: 1,
      })
    );
  };

  return (
    <div className="group bg-gray-100 p-4 rounded shadow-md w-full max-w-xs mx-auto relative transition duration-300">
      <img src={imageSrc} alt={imageAlt} className="w-full h-auto mb-4" />
      <div className="text-center">
        <p className="text-lg font-semibold">{title}</p>
        <span className="text-green-600 font-bold">{price} €</span>
      </div>

      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition duration-300 rounded">
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600"
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};

export default Card;
