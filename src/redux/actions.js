import types from './types';

export const fetchPokemons = (page) => {
  return {
    type: types.SEND_REQUEST_POKEMONS,
    payload: page
  }
}

export const fetchdataSuccessPokemon = ({ pokemonList, count }) => {
  return {
    type: types.SEND_REQUEST_POKEMON_SUCCESS,
    payload: { pokemonList, count }
    //payload: data.pokemons
  }
}

export const fetchDataFailure = (error) => {
  return {
    type: types.SEND_REQUEST_FAILURE,
    payload: {},
    error: error
  }
}

