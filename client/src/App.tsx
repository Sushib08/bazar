import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/sections/Header";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Tu pourras ajouter d'autres routes ici */}
        </Routes>
      </main>
    </Router>
  );
};

export default App;
