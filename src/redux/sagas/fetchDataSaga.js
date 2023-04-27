import { takeEvery, call, put } from "redux-saga/effects";
import types from "../types";
import axios from "axios";
import { fetchdataSuccessPokemon } from "../actions";

const base = `https://pokeapi.co/api/v2/pokemon`
const baseUrl = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=20'
function* fetchPokemons(action) {
  try {
    const response = yield call(() => axios.get(baseUrl))
    const list = [...response.data.results];

    for (let index = 0; index < list.length; index++) {
      const name = list[index].name;
      const getSpriteData = yield call(() => axios.get(`${base}/${name}`))
      const sprite = getSpriteData.data.sprites.front_default
      list[index].sprite = sprite;
    }
    yield put(fetchdataSuccessPokemon(list))
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