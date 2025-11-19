import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
const Product = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get(`https://node-vercel-app-rho.vercel.app/api/funcionarios/${id}`)
      .then((response) => setData(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  return
            <Grid size={3} key={index}>
              <StyledCards
                id={produto._id}
                nome={produto.nome}
                foto={produto.foto}
              />
            </Grid>
};

export default Product;

