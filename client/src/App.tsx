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

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produits" element={<Products />} />
          <Route path="/producteurs" element={<LocalProducers />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/panier" element={<Cart />} />
          <Route path="/produits/:category" element={<CategoryPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
