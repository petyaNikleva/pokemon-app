import { takeEvery, call, put } from "redux-saga/effects";
import types from "../types";
import axios from "axios";
import { fetchdataSuccessPokemon } from "../actions";
import { pokemonsPerPage } from "../../constants";


const baseUrl = `https://pokeapi.co/api/v2/pokemon`
function* fetchPokemons(action) {
  const offset = Number(action.payload) * pokemonsPerPage;
  try {
    const response = yield call(() => axios.get(`${baseUrl}?offset=${offset}&limit=${pokemonsPerPage}`))
    const pokemonList = [...response.data.results];
    const count = response.data.count;

    for (let index = 0; index < pokemonList.length; index++) {
      const name = pokemonList[index].name;
      const getSpriteData = yield call(() => axios.get(`${baseUrl}/${name}`))
      const sprite = getSpriteData.data.sprites.front_default
      pokemonList[index].sprite = sprite;
    }
    yield put(fetchdataSuccessPokemon({ pokemonList, count }))
  }
  catch (error) {
    console.log(error)
  }
}

export function* watchFetchPokemons() {
  yield takeEvery(types.SEND_REQUEST_POKEMONS, fetchPokemons)
}

// function* asyncFetchPokemonsRequest(action) {
//   try {
//     const url = `https://pokeapi.co/api/v2/pokemon`
//     const response = yield call(() => axios.get(url))
//     console.log(response.data)
//     yield put(fetchdataSuccessPokemon(response.data.results))
//   }
//   catch (error) {
//     console.log(error)
//   }
// }

// export function* watchLoadPokemon() {
//   yield takeEvery(types.SEND_REQUEST_POKEMONS, asyncFetchPokemonsRequest)
// } 