import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const CardFuncionario = ({ nome, dt_nascimento, cargo }) => {
  return (
    <Card sx={{ minWidth: 250, padding: 1 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {nome}
        </Typography>

        <Typography color="text.secondary">
          Nascimento: {dt_nascimento}
        </Typography>

        <Typography variant="body2">
          Cargo: {cargo}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardFuncionario;
