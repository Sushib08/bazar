import React from "react";

const Cart: React.FC = () => {
  // Exemple de données en dur, tu les remplaceras plus tard par les vraies
  const cartItems = [
    {
      id: 1,
      name: "Tomates",
      price: 3.5,
      quantity: 2,
      image: "/images/products/tomates.webp",
    },
    {
      id: 2,
      name: "Fromage",
      price: 5.2,
      quantity: 1,
      image: "/images/products/fromage.webp",
    },
  ];

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Votre panier</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Votre panier est vide.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 border-b pb-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">
                  Quantité : {item.quantity}
                </p>
              </div>
              <p className="text-gray-700 font-medium">
                {(item.price * item.quantity).toFixed(2)} €
              </p>
            </div>
          ))}

          <div className="text-right text-xl font-bold mt-6">
            Total : {total.toFixed(2)} €
          </div>

          <div className="text-right">
            <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
              Valider la commande
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
