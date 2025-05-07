import { useState } from "react";
import HomeButton from "../elements/HomeButton";
import { navLinksFooter } from "../../data/navLinks";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAppStoreIos,
  faGooglePlay,
  faSquareFacebook,
  faSquareInstagram,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Download from "../elements/Download";
import SocialIcons from "../SocialIcons";

const Footer = () => {
  const [openAbout, setOpenAbout] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  return (
    <footer className="bg-green-500 p-8">
      <div className="flex flex-col md:flex-row justify-evenly items-start gap-12">
        <div className="max-w-md mx-auto md:mx-0 text-center md:text-left">
          <HomeButton textColor="text-white" />
          <p className="text-white mt-4 text-sm">
            Nous vendons des produits frais, en direct des producteurs locaux.
            Un prix juste pour eux, une qualité optimale pour vous. Ensemble,
            soutenons une alimentation équitable et de proximité.
          </p>
          <div className="flex gap-4 mt-4">
            <Download
              url="https://www.apple.com/fr/app-store/"
              icon={faGooglePlay}
              storeName="Google Play"
            />
            <Download
              url="https://play.google.com/store/games?hl=fr&pli=1"
              icon={faAppStoreIos}
              storeName="App Store"
            />
          </div>
        </div>
        <div className="w-full md:w-auto">
          <button
            onClick={() => setOpenAbout(!openAbout)}
            className="md:hidden w-full flex justify-between items-center text-white font-quicksand font-bold text-2xl mt-6"
          >
            À propos
            <span>{openAbout ? "▲" : "▼"}</span>
          </button>
          <h3 className="hidden md:block font-quicksand font-bold text-2xl text-white mt-6 md:mt-0">
            À propos
          </h3>
          <div
            className={`flex-col space-y-2 mt-4 ${
              openAbout ? "flex" : "hidden"
            } md:flex`}
          >
            {navLinksFooter.map(({ to, label }) => (
              <Link key={to} to={to} className="text-white hover:underline">
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full md:w-auto">
          <button
            onClick={() => setOpenContact(!openContact)}
            className="md:hidden w-full flex justify-between items-center text-white font-quicksand font-bold text-2xl mt-6"
          >
            Contact
            <span>{openContact ? "▲" : "▼"}</span>
          </button>
          <h3 className="hidden md:block font-quicksand font-bold text-2xl text-white mt-6 md:mt-0">
            Contact
          </h3>

          <div
            className={`flex-col space-y-2 mt-4 text-white text-sm ${
              openContact ? "flex" : "hidden"
            } md:flex`}
          >
            <p>Ile-de-France, France</p>
            <p>Email : email@gmail.com</p>
            <p>Téléphone : +33 6 00 00 00 00</p>
            <div className="flex space-x-4 mt-2">
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
