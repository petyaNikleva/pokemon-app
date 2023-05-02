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
  }
}

export const fetchDataFailure = (error) => {
  return {
    type: types.SEND_REQUEST_POKEMON_FAILURE,
    payload: {},
    error: error
  }
}

export const getCurrentPokemon = (name) => {
  return {
    type: types.GET_CURRENT_POKEMON,
    payload: name
  }
}

export const getCurrentPokemonSuccess = (currentPokemon) => {
  return {
    type: types.GET_CURRENT_POKEMON_SUCCESS,
    payload: currentPokemon
  }
}


