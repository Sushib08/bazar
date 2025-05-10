import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Cart = () => {
  const totalItems = useSelector((state: RootState) =>
    state.cart.items.reduce(
      (sum: any, item: { quantity: any }) => sum + item.quantity,
      0
    )
  );

  return (
    <Link
      to="/panier"
      className="inline-flex items-center gap-2 text-gray-700 whitespace-nowrap"
    >
      <FontAwesomeIcon icon={faCartShopping} />
      <span>Panier ({totalItems})</span>
    </Link>
  );
};

export default Cart;
