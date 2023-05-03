import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPokemon } from '../redux/actions';

import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { capitalizeFirstLetter } from '../helper';
import { errorMessage } from '../constants';

const PokemonDetailsCard = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const currentPokemon = useSelector((state) => state.fetchDataReducer.currentPokemon);
  const loading = useSelector((state) => state.fetchDataReducer.loading);
  const error = useSelector((state) => state.fetchDataReducer.error);

  useEffect(() => {
    dispatch(getCurrentPokemon(name));
  }, [dispatch, name]);

  return (
    <>
      {loading && <Typography>Loading...</Typography>}
      {currentPokemon &&
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
            <Typography variant="body2">
              Height: {currentPokemon.height}
            </Typography>
            <Typography variant="body2">
              Weight: {currentPokemon.weight}
            </Typography>
          </CardContent>
          <CardContent sx={{ display: "flex", flexDirection: 'column', alignItems: "center" }}>
            <Typography fontSize={24}>Ablities:</Typography>
            {currentPokemon.stats.map((stat =>
              <Box key={stat.stat.name} sx={{ display: "flex", padding: 1 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 24, margin: 1 }}
                  image={`/images/${stat.stat.name}.png`}
                  alt="ability"
                />
                <Typography>{stat.stat.name}: {stat.base_stat} </Typography>
              </Box>))
            }
          </CardContent>
        </Card >
      }
      {error && !loading && <Typography>{errorMessage}</Typography>}
    </>
  )
}

export default PokemonDetailsCard;

