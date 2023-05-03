import { useNavigate } from 'react-router-dom';
import { CardActionArea, Typography, Card, CardMedia, CardContent } from '@mui/material';
import PropTypes from 'prop-types';

const PokemonSmallCard = ({ pokemon }) => {
  const navigate = useNavigate();

  const handlePokemonClick = (e) => {
    e.preventDefault();
    navigate(`details/${pokemon.name}`);
  }
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

PokemonSmallCard.propTypes = {
  pokemon: PropTypes.object.isRequired
}

export default PokemonSmallCard;