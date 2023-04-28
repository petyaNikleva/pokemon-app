import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getCurrentPokemon } from '../redux/actions';

const PokemonDetailsCard = () => {
  const { name } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentPokemon(name));
  }, [dispatch, name]);

  return (
    <div>Details</div>
  )
}

export default PokemonDetailsCard;