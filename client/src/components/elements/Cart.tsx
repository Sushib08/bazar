import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  return (
    <Link
      to="/panier"
      className="inline-flex items-center gap-2 text-gray-700 whitespace-nowrap"
    >
      <FontAwesomeIcon icon={faCartShopping} />
      <span>Panier (0)</span>
    </Link>
  );
};

export default Cart;
