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
  return (
      <>
           <div>
            {data?.nome}
           </div>
           <div>
            {data?.dtNascimento}
           </div>
      </>
          )
};

export default Product;

