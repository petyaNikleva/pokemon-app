import types from "../types";

const initialState = {
  pokemons: [],
  loading: false,
  error: {},
  totalCountPokemons: 0
}

const fetchDataReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.SEND_REQUEST_POKEMONS:
      return {
        ...state,
        loading: true
      }
    case types.SEND_REQUEST_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        error: {},
        pokemons: action.payload.pokemonList,
        totalCountPokemons: action.payload.count
      }
    case types.SEND_REQUEST_POKEMON_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    case types.GET_CURRENT_POKEMON:
      console.log('bbbb')
      return {
        ...state,
        loading: true
      }

    default: return {
      state
    }
  }
}

export default fetchDataReducer;