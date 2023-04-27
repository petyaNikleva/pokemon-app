import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Box, Typography, Pagination } from '@mui/material';
import PokemonCard from './PokemonCard';
import { fetchPokemons } from '../redux/actions';


const Pokemons = () => {
  const pokemons = useSelector((state) => state.fetchDataReducer.pokemons)
  const loading = useSelector((state) => state.fetchDataReducer.loading)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  const [page, setPage] = useState(1)
  const handleChange = (e, page) => {
    console.log(page)
    setPage(page)
  }

  return (
    <>
      {loading && <Typography>Loading</Typography>}
      {
        pokemons?.length > 0 && (
          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
            {pokemons.map(pokemon => {
              return <PokemonCard key={pokemon.name} pokemon={pokemon} />
            })}
          </Box>
        )}
      {/* {error && !loading && <p>{error}</p>} */}
      <Box>Current page is {page}</Box>
      <Pagination count={10} color="primary" onChange={handleChange}></Pagination>
    </>
  )
}

export default Pokemons;