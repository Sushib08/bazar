import React from "react";

const Store: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        <h3
          className="relative text-3xl font-quicksand font-bold italic text-gray-700 inline-block 
          after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 
          after:-bottom-1 after:w-[60%] after:h-1 after:bg-green-500 after:rounded"
        >
          Nos Magasins
        </h3>
        <p className="text-lg text-gray-500">
          Cette page est en construction 🏗️
        </p>
      </div>
    </div>
  );
};

export default Store;
