import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import "../StyledCards.css";

export default function StyledCards({
  id, nome, foto, cargo
}) {
  const navigate = useNavigate();

  return (
    <Card className="styled-card" elevation={4}>
      <CardContent className="styled-card-content">
        
        <img 
          src={foto} 
          alt={nome} 
          className="styled-card-image" 
        />

        <Typography variant="h6" className="styled-card-name">
          {nome}
        </Typography>

        <Typography variant="body2" className="styled-card-role">
          {cargo}
        </Typography>

      </CardContent>

      <CardActions className="styled-card-actions">
        <Button 
          onClick={() => navigate(`/product/${id}`)} 
          variant="contained"
          className="styled-card-button"
        >
          Ver Produto
        </Button>
      </CardActions>
    </Card>
  );
}


