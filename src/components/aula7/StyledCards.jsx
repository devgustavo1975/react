import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function StyledCards({
  id, nome, foto, cargo
}) {
  const navigate = useNavigate();
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective
          {nome}
        </Typography>
        <img src={`${foto}`}alt=''/>
        <Typography variant="body2">
          {cargo}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => navigate(`produto/${id}`)} color="inherit">Comprar</Button>
      </CardActions>
    </Card>
  );
}
