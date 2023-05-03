import { takeEvery, call, put, takeLatest } from "redux-saga/effects";
import types from "../types";
import axios from "axios";
import { fetchDataFailure, fetchdataSuccessPokemon, getCurrentPokemonSuccess } from "../actions";
import { baseUrl, pokemonsPerPage } from "../../constants";

function* fetchPokemons(action) {
  try {
    const offset = Number(action.payload) * pokemonsPerPage;
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
    yield put(fetchDataFailure(error))
    console.log(error)
  }
}

export function* watchFetchPokemons() {
  yield takeLatest(types.SEND_REQUEST_POKEMONS, fetchPokemons)
}

function* getCurrentPokemon(action) {
  const name = action.payload;
  try {
    const response = yield call(() => axios.get(`${baseUrl}/${name}`))
    const currentPokemon = response.data;
    yield put(getCurrentPokemonSuccess(currentPokemon))
  }
  catch (error) {
    yield put(fetchDataFailure(error))
    console.log(error)
  }
}

export function* watchGetCurrentPokemon() {
  yield takeEvery(types.GET_CURRENT_POKEMON, getCurrentPokemon)
}




