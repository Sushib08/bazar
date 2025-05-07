import { useState } from "react";
import { useLocation } from "react-router-dom";
import HomeButton from "../elements/HomeButton";
import Search from "../elements/Search";
import Cart from "../elements/Cart";
import Bars from "../elements/Bars";
import ConnexionButton from "../elements/ConnexionButton";
import Sidebar from "./Sidebar";
import NavLinksList from "../elements/NavLinksList";
import Buttons from "../elements/Buttons";

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const headerClasses = `bg-gray-100 px-6 pt-6 relative ${
    !isHomePage ? "pb-5 shadow" : ""
  }`;

  return (
    <header className={headerClasses}>
      <div className="flex justify-around items-center mx-8">
        <HomeButton />
        <div className="hidden lg:flex space-x-8">
          <NavLinksList className="text-lg font-bold" />
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden xs:block">
            <Search />
          </div>
          <Cart />
          <ConnexionButton />
          <div className="lg:hidden">
            <Bars toggleSidebar={toggleSidebar} />
          </div>
        </div>
      </div>

      {isHomePage && (
        <div className="mt-12 flex justify-center gap-[10rem]">
          <img
            src="./images/woman.webp"
            alt="woman"
            className="w-80 h-auto hidden lg:block"
          />
          <div className="w-full lg:w-[22rem] flex flex-col justify-center items-center lg:items-start">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold font-quicksand text-gray-700 mb-6 text-center lg:text-left">
              Des Produits Frais Et Savoureux, Livrés Chez Vous Ou En Magasin.
            </p>
            <Buttons
              label="Commander maintenant"
              className="text-base md:text-lg lg:text-xl py-2 px-4 md:px-6 bg-green-500 text-white mb-6 mx-auto lg:mx-0"
              to="/produits"
            />
          </div>
        </div>
      )}

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </header>
  );
};

export default Header;
