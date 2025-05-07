import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/sections/Header";
import Home from "./pages/Home";
import Footer from "./components/sections/Footer";
import LocalProducers from "./pages/LocalProducers";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/producteurs" element={<LocalProducers />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
