import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useAppDispatch } from "../redux/hooks";
import {
  updateQuantityAsync,
  removeFromCartAsync,
  clearCart,
  clearCartAsync,
} from "../redux/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquarePlus,
  faSquareMinus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const total = cartItems.reduce(
    (sum: number, item) => sum + item.price * item.quantity,
    0
  );

  const handleValidate = () => {
    dispatch(clearCartAsync());
    alert("Votre commande a bien été validée !");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="mb-8 flex justify-center">
        <h3
          className="relative text-3xl font-quicksand font-bold italic text-gray-700 inline-block 
            after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 
            after:-bottom-1 after:w-[60%] after:h-1 after:bg-green-500 after:rounded"
        >
          Votre panier
        </h3>
      </div>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Votre panier est vide.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center gap-4 border-b pb-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded"
              />

              <div className="flex-1 text-center sm:text-left w-full">
                <h3 className="text-lg font-semibold">{item.name}</h3>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2 gap-2">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <button
                      onClick={() => {
                        if (item.quantity === 1) {
                          dispatch(removeFromCartAsync(item.id));
                        } else {
                          dispatch(
                            updateQuantityAsync({
                              id: item.id,
                              quantity: item.quantity - 1,
                            })
                          );
                        }
                      }}
                      className="text-green-500 transition text-xl"
                    >
                      <FontAwesomeIcon icon={faSquareMinus} />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantityAsync({
                            id: item.id,
                            quantity: item.quantity + 1,
                          })
                        )
                      }
                      className="text-green-500 transition text-xl"
                    >
                      <FontAwesomeIcon icon={faSquarePlus} />
                    </button>
                  </div>

                  <p className="text-gray-700 font-medium text-center sm:text-right">
                    {item.quantity} x {item.price.toFixed(2)} € ={" "}
                    {(item.price * item.quantity).toFixed(2)} €
                  </p>
                </div>
              </div>

              <button
                onClick={() => dispatch(removeFromCartAsync(item.id))}
                className="text-sm transition"
              >
                <span className="inline-block sm:hidden bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                  Supprimer
                </span>
                <FontAwesomeIcon
                  icon={faTrash}
                  className="hidden sm:inline-block text-red-500 hover:text-red-700 text-lg"
                />
              </button>
            </div>
          ))}

          <div className="mt-6 text-center sm:text-right text-xl font-bold">
            Total : {total.toFixed(2)} €
          </div>

          <div className="flex justify-center sm:justify-end">
            <button
              onClick={handleValidate}
              className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
            >
              Valider la commande
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
