import types from './types';

export function fetchPokemons() {
  return {
    type: types.SEND_REQUEST_POKEMONS,
  }
}

export const fetchdataSuccessPokemon = (pokemons) => {

  return {
    type: types.SEND_REQUEST_POKEMON_SUCCESS,
    payload: pokemons
  }
}

export const fetchDataFailure = (error) => {
  return {
    type: types.SEND_REQUEST_FAILURE,
    payload: {},
    error: error
  }
}

//export const fetchdataSuccess = (user) => {
  //   return {
  //     type: types.SEND_REQUEST_SUCCESS,
  //     payload: user
  //   }
  // }