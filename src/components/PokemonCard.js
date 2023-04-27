import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const PokemonCard = ({ pokemon }) => {
  return (
    <Card sx={{ maxWidth: 120 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="120"
          image={pokemon.sprite}
          alt="pokemon"
        />
        <CardContent>
          <Typography gutterBottom component="div">
            {pokemon.name}
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
  );
}

export default PokemonCard;