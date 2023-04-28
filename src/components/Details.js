import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { name } = useParams();

  useEffect(() => {
    //getPokemon(name)
  }, [])

  return (
    <div>Details</div>
  )
}

export default Details