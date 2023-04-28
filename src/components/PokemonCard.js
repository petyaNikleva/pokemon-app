import { useNavigate } from 'react-router-dom';
import { CardActionArea, Typography, Card, CardMedia, CardContent } from '@mui/material';

const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate();

  const handlePokemonClick = (e) => {
    e.preventDefault();
    navigate(`details/${pokemon.name}`);
  }
  console.log(pokemon.url)
  return (

    <Card sx={{ maxWidth: 120 }}>
      <CardActionArea onClick={handlePokemonClick}>
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