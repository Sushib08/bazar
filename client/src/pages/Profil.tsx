import React, { useEffect, useState } from "react";
import { useUser } from "../contexts/UserContext";

const Profil = () => {
  const { user, login } = useUser();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    currentPassword: "",
    newPassword: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!user) return;

    fetch("http://localhost:5000/api/user/me", {
      headers: { Authorization: `Bearer ${user.token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setForm((prev) => ({
          ...prev,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
        }));
      })
      .catch((err) => {
        console.error("Erreur lors du chargement du profil :", err);
        setMessage("Erreur de chargement du profil.");
      });
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    if (!user) {
      setMessage("Utilisateur non connecté.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/user/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        login({ firstName: form.firstName, token: user.token });
        setMessage("Profil mis à jour avec succès !");
      } else {
        setMessage(data.message || "Erreur lors de la mise à jour.");
      }
    } catch (error) {
      console.error("Erreur serveur :", error);
      setMessage("Une erreur est survenue.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <div className="mb-8 flex justify-center">
        <h3
          className="relative text-3xl font-quicksand font-bold italic text-gray-700 inline-block 
            after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 
            after:-bottom-1 after:w-[60%] after:h-1 after:bg-green-500 after:rounded"
        >
          Mon Profil
        </h3>
      </div>

      {message && (
        <p className="text-center text-sm mb-4 text-green-600">{message}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          placeholder="Prénom"
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          placeholder="Nom"
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full border p-2 rounded"
        />

        <hr className="my-2" />

        <input
          type="password"
          name="currentPassword"
          value={form.currentPassword}
          onChange={handleChange}
          placeholder="Mot de passe actuel"
          className="w-full border p-2 rounded"
        />
        <input
          type="password"
          name="newPassword"
          value={form.newPassword}
          onChange={handleChange}
          placeholder="Nouveau mot de passe"
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Mettre à jour
        </button>
      </form>
    </div>
  );
};

export default Profil;
