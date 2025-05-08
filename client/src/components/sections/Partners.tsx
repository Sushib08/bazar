import React from "react";

const Partners = () => {
  const logos = [
    { src: "./images/home/partners/grand_frais.webp", alt: "grand frais" },
    { src: "./images/home/partners/vessiere.webp", alt: "vessière" },
    { src: "./images/home/partners/fromageries.webp", alt: "fromagerie" },
    { src: "./images/home/partners/vie_claire.webp", alt: "Vie claire" },
  ];

  return (
    <div className="w-full overflow-hidden px-4">
      <div className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap justify-center items-center gap-6 max-w-screen-xl mx-auto">
        {logos.map(({ src, alt }, index) => (
          <img
            key={index}
            src={src}
            alt={alt}
            className="h-auto w-4/5 sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-[200px] md:max-w-[240px] lg:max-w-[260px] xl:max-w-[300px] transition-all duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default Partners;
