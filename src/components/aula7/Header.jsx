import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

function NavHeader() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color='default'> 
      <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            LOJA DE SUPLEMENTOS NATURAIS
          </Typography>
          
          <Box>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Sobre</Button>
            <Button color="inherit">Contato</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavHeader;