import './App.css'
import Perfil from './perfil'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import NavHeader from './components/aula7/Header'
import Home from './components/aula7/Home'
import Product from './components/aula7/Product'
import Contato from './components/aula7/FaleConosco';

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
}

export default App;