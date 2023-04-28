import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getCurrentPokemon } from '../redux/actions';

const PokemonDetailsCard = () => {
  const { name } = useParams();

  useEffect(() => {
    getCurrentPokemon(name)
  }, [])

  return (
    <div>Details</div>
  )
}

export default PokemonDetailsCard;