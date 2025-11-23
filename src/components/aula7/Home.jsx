import { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import StyledCards from 'c:/gustavoFernandes/my-react-app/src/components/aula7/StyledCards';
import './Home.css';

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://node-vercel-app-rho.vercel.app/api/funcionarios')
      .then((response) => setData(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-title">Funcionários</h1>

      <Box sx={{ flexGrow: 1 }}>
        <Grid 
          container 
          spacing={3} 
          justifyContent="center"
        >
          {data?.map((funcionario, index) => (
            <Grid 
              key={index} 
              item 
              xs={12} sm={6} md={4} lg={3}
            >
              <StyledCards
                id={funcionario._id}
                nome={funcionario.nome}
                foto={funcionario.foto}
                cargo={funcionario.cargo}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Home;




          
