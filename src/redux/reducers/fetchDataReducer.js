import types from "../types";

const initialState = {
  pokemons: [],
  loading: false,
  error: {}
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
        pokemons: action.payload
      }
    case types.SEND_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default: return {
      state
    }
  }
}

export default fetchDataReducer;