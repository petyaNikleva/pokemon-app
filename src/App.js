import { Box } from '@mui/material';
import Header from './components/Header';
import Pokemons from './components/Pokemons';

const App = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Header />
      <Pokemons />
    </Box>
  )
}

export default App;

