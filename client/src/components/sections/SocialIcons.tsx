import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareInstagram,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
  {
    href: "https://www.facebook.com",
    icon: faSquareFacebook,
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com",
    icon: faSquareInstagram,
    label: "Instagram",
  },
  {
    href: "https://twitter.com", // Corrigé depuis "x.com" pour éviter confusion
    icon: faSquareXTwitter,
    label: "X (Twitter)",
  },
];

const SocialIcons = () => (
  <>
    {socialLinks.map(({ href, icon, label }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="bg-white bg-opacity-20 p-3 rounded-full text-white hover:bg-opacity-40 transition"
      >
        <FontAwesomeIcon icon={icon} size="2x" />
      </a>
    ))}
  </>
);

export default SocialIcons;
