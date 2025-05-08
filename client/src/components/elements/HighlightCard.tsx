import React from "react";
import Buttons from "./Buttons";

interface HighlightCardProps {
  label?: string;
  title: string;
  imageSrc: string;
  imageAlt?: string;
}

const HighlightCard: React.FC<HighlightCardProps> = ({
  label = "Promo",
  title,
  imageSrc,
  imageAlt = "visuel",
}) => {
  return (
    <div className="bg-gray-100 flex flex-col md:flex-row items-center justify-evenly w-full md:w-4/5 xl:w-2/3 2xl:w-1/2 shadow-md px-4 py-6 mx-auto">
      <div className="m-4 flex flex-col gap-2 text-center md:text-left">
        <h4 className="text-xs md:text-sm lg:text-base italic">{label}</h4>
        <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-quicksand font-bold italic whitespace-pre-line">
          {title}
        </p>
        <Buttons
          label={"Acheter Maintenant"}
          to="/products"
          className="text-green-500 border-green-500 hover:bg-green-500 hover:text-white border-2 rounded-full px-3 py-1 text-xs md:text-sm lg:text-base"
        />
      </div>
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-24 md:w-28 lg:w-32 xl:w-36 2xl:w-40 h-auto mt-4 md:mt-0"
      />
    </div>
  );
};

export default HighlightCard;
