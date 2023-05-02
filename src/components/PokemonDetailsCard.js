import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPokemon } from '../redux/actions';

import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { capitalizeFirstLetter } from '../helper';


const PokemonDetailsCard = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const currentPokemon = useSelector((state) => state.fetchDataReducer.currentPokemon)

  useEffect(() => {
    dispatch(getCurrentPokemon(name));
  }, [dispatch, name]);

  return (
    <> {currentPokemon &&
      <Card sx={{ maxWidth: 545, width: 400, display: "flex", flexDirection: 'column', alignItems: "center" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="pokemon">
              {name.charAt(0).toUpperCase()}
            </Avatar>
          }
          title={capitalizeFirstLetter(name)}
          titleTypographyProps={{ variant: 'h5' }}
        />
        <Box sx={{ maxWidth: 210 }}>
          <CardMedia
            component="img"
            height="200"
            image={currentPokemon.sprites.front_default}
            alt="pokemon"
          />
        </Box>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Height: {currentPokemon.height}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Weight: {currentPokemon.weight}
          </Typography>
        </CardContent>

        <CardContent sx={{ display: "flex", flexDirection: 'column', alignItems: "center" }}>
          <Typography paragraph fontSize={24}>Ablities:</Typography>
          <Typography paragraph>
            {currentPokemon.stats.map((s =>
              <Box sx={{ display: "flex", alignItems: "center", padding: 1 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 24, margin: 1 }}
                  image={`/images/${s.stat.name}.png`}
                  alt="ability"
                />
                <Typography>{s.stat.name}: {s.base_stat} </Typography>
              </Box>))}
          </Typography>
        </CardContent>
      </Card >
    }
    </>
  )
}

export default PokemonDetailsCard;

