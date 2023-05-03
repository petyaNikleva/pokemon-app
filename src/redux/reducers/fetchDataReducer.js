import types from "../types";

const initialState = {
  pokemons: [],
  loading: false,
  error: null,
  totalCountPokemons: 0,
  currentPokemon: null
}

const fetchDataReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.SEND_REQUEST_POKEMONS:
      return {
        ...state,
        loading: true,
        pokemons: [],
      }
    case types.SEND_REQUEST_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
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
      return {
        ...state,
        loading: true
      }
    case types.GET_CURRENT_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        currentPokemon: action.payload
      }

    default: return {
      state
    }
  }
}

export default fetchDataReducer;