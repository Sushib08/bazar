import React from "react";

interface SectionsProducersProps {
  imageSrc: string;
  bgColor?: string;
  title: string;
  text: string;
  imageLeft?: boolean;
  textColor?: string; // nouvelle prop
}

const SectionsProducers: React.FC<SectionsProducersProps> = ({
  imageSrc,
  bgColor = "bg-white",
  title,
  text,
  imageLeft = false,
  textColor = "text-gray-700",
}) => {
  return (
    <div className={`${bgColor} py-12 px-4`}>
      <div
        className={`flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto ${
          imageLeft ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Texte */}
        <div className="w-full md:w-1/2 text-left">
          <h3 className={`font-quicksand font-bold text-3xl mb-4 ${textColor}`}>
            {title}
          </h3>
          <p className={`${textColor} leading-relaxed`}>{text}</p>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionsProducers;
