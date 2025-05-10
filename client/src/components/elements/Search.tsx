import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "../../redux/hooks";
import { addToCartAsync } from "../../redux/cartSlice";
import { useUser } from "../../contexts/UserContext";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const dispatch = useAppDispatch();
  const { user } = useUser();

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    const timeout = setTimeout(() => {
      fetch(`http://localhost:5000/api/products/search?q=${query}`)
        .then((res) => res.json())
        .then(setResults)
        .catch(console.error);
    }, 300);

    return () => clearTimeout(timeout);
  }, [query]);

  const handleAdd = (product: any) => {
    if (!user) {
      alert("Veuillez vous connecter pour ajouter un produit au panier.");
      return;
    }

    dispatch(
      addToCartAsync({
        id: product._id,
        name: product.title,
        price: product.price,
        image: product.imageSrc,
        quantity: 1,
      })
    );
  };

  return (
    <div className="relative max-w-sm w-full">
      <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="text-gray-500 mr-2"
        />
        <input
          type="search"
          placeholder="Rechercher..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full outline-none text-sm bg-transparent placeholder-gray-400"
        />
      </div>

      {results.length > 0 && (
        <ul className="absolute z-10 bg-white border rounded-md mt-1 w-full max-h-60 overflow-y-auto shadow-lg">
          {results.map((product: any) => (
            <li
              key={product._id}
              className="flex justify-between items-center px-4 py-2 hover:bg-gray-100"
            >
              <span className="text-sm">{product.title}</span>
              <button
                onClick={() => handleAdd(product)}
                className="text-xs bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
              >
                Ajouter
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
