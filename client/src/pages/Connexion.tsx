import React, { useState } from "react";
import { Link } from "react-router-dom";

const Connexion: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Veuillez remplir tous les champs.");
      return;
    }
    setError("");
    console.log("Connexion avec :", { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-6 bg-white rounded-lg shadow-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Connexion</h2>

        <input
          type="email"
          placeholder="Adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 rounded"
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Se connecter
        </button>

        <p className="text-sm text-center">
          Pas encore de compte ?{" "}
          <Link to="/inscription" className="text-green-600 hover:underline">
            Créer un compte
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Connexion;
