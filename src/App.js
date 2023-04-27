import React, { useEffect } from 'react';

import { fetchData, fetchPokemons } from './redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Typography } from '@mui/material';
import PokemonCard from './components/PokemonCard';

import Header from './components/Header';

const App = () => {
  const user = useSelector((state) => state.fetchDataReducer.user)
  const pokemons = useSelector((state) => state.fetchDataReducer.pokemons)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch])





  const handleFetchData = () => {
    dispatch(fetchData(2));
  }

  const handleFetchPokemons = () => {
    dispatch(fetchPokemons());
  }



  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: '#bbbaba' }}>
      <Header />

      <Button variant="outlined" onClick={handleFetchData}>Fetch USER FRO ANOTHER SITE</Button>
      <Box>
        {
          user
        }
      </Box>
      <Button variant="outlined" onClick={handleFetchPokemons}>Fetch Pokemon</Button>

      {
        pokemons?.length > 0 ? <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
          {pokemons.map(pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon} />)}
        </Box>
          : null
      }
    </Box>
  )

}


export default App;


