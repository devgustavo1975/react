import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavHeader from "./components/Header";
import Home from "./components/Home";
import Product from "./components/Product";
import Contato from "./components/FaleConosco";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
