import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography, Pagination } from '@mui/material';
import { fetchPokemons } from '../redux/actions';

import { errorMessage, pokemonsPerPage } from '../constants';
import PokemonSmallCard from './PokemonSmallCard';

const Pokemons = () => {
  const pokemons = useSelector((state) => state.fetchDataReducer.pokemons);
  const loading = useSelector((state) => state.fetchDataReducer.loading);
  const error = useSelector((state) => state.fetchDataReducer.error);
  const totalCountPokemons = useSelector((state) => state.fetchDataReducer.totalCountPokemons);

  const count = Math.ceil(totalCountPokemons / pokemonsPerPage);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchPokemons(page - 1));
  }, [dispatch, page]);

  return (
    <Box maxWidth="760px">
      {loading && <Typography>Loading...</Typography>}
      {pokemons?.length > 0 && (
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
          {pokemons.map(pokemon => {
            return <PokemonSmallCard key={pokemon.name} pokemon={pokemon} />
          })}
        </Box>
      )}
      {count && <Pagination
        count={count}
        color="primary"
        onChange={(e, page) => setPage(page)}
        sx={{ padding: 4, pl: 44 }}
      />}
      {error && !loading && <Typography>{errorMessage}</Typography>}
    </Box>
  )
}

export default Pokemons;