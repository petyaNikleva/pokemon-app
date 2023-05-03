import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './components/Header';
import Pokemons from './components/Pokemons';
import PokemonDetailsCard from './components/PokemonDetailsCard';

const App = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Pokemons />} />
          <Route path="/details/:name" element={<PokemonDetailsCard />} />
        </Routes>
      </Router>
    </Box>
  )
}

export default App;

