import { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '../components/Card'; // ajuste o caminho conforme seu projeto

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://node-vercel-app-rho.vercel.app/api/funcionarios')
      .then((response) => setData(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="home">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {data?.map((funcionario, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                nome={funcionario.nome}
                dt_nascimento={funcionario.dt_nascimento}
                cargo={funcionario.cargo}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Home;


          