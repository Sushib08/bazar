import React from "react";
import SectionsProducers from "../components/sections/SectionsProducers";

const LocalProducers = () => {
  return (
    <div>
      <div className="relative w-full">
        <img
          src="/images/producers/pommes.webp"
          alt="apple"
          className="w-full max-h-[500px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold drop-shadow-md">
            Nos producteurs
          </h2>
          <p className="text-white text-sm sm:text-base md:text-lg mt-4 max-w-2xl drop-shadow-md">
            Implantés dans la région lyonnaise, ce sont des producteurs locaux
            qui alimentent les étals de nos magasins. Grâce à eux, nos produits
            sont frais et de qualité !
          </p>
        </div>
      </div>

      {/* Contenu suivant */}
      <SectionsProducers
        imageSrc="/images/producers/abricots.webp"
        bgColor="bg-white"
        textColor="text-black"
        title="Des producteurs sélectionnés avec soin"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        imageLeft={false}
      />

      <SectionsProducers
        imageSrc="/images/producers/coorporate.webp"
        bgColor="bg-green-500"
        textColor="text-white"
        title="La coopérative fruitière"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        imageLeft={true}
      />
      <SectionsProducers
        imageSrc="/images/producers/primeur.webp"
        bgColor="bg-white"
        textColor="text-black"
        title="Des producteurs passionnés"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        imageLeft={false}
      />
    </div>
  );
};

export default LocalProducers;
