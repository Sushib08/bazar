import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/sections/Header";
import Home from "./pages/Home";
import Footer from "./components/sections/Footer";
import LocalProducers from "./pages/LocalProducers";
import Products from "./pages/Products";
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";
import Cart from "./pages/Cart";
import CategoryPage from "./pages/CategoryPage";
import Store from "./pages/Store";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produits" element={<Products />} />
          <Route path="/produits/:category" element={<CategoryPage />} />
          <Route path="/producteurs" element={<LocalProducers />} />
          <Route path="/magasins" element={<Store />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/panier" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
