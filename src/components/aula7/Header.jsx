import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function NavHeader() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color='default'> 
      <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            LOJA DE SUPLEMENTOS NATURAIS
          </Typography>
          
          <Box>
            <Button onClick={()=> navigate ('/contato')} color="inherit">Fale conosco</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavHeader;