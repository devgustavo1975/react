import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import '../Product.css';

const Product = () => {
  const { id } = useParams();
  const [funcionario, setFuncionario] = useState(null);

  useEffect(() => {
    axios
      .get(`https://node-vercel-app-rho.vercel.app/api/produtos/${id}`)
      .then((response) => setFuncionario(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  if (!funcionario) {
    return <p className="loading">Carregando...</p>;
  }

  return (
    <div className="product-container">
      {console.log(funcionario)}
      <Box component={Paper} elevation={3} className="product-card">
        <div className="product-left">
          <img 
            src={funcionario.foto} 
            alt={funcionario.nome} 
            className="product-image"
          />
        </div>

        <div className="product-right">
          <h1 className="product-name">{funcionario.nome}</h1>
          <p className="product-role">{funcionario.cargo}</p>

          <div className="product-info-box">
            <h3>Informações</h3>
            <p><strong>Descrição:</strong> {funcionario.descricao}</p>
            <p><strong>Marca:</strong> {funcionario.marca}</p>
            <p><strong>Preço</strong> {funcionario.preco.valor}</p>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Product;


