import { takeEvery, call, put } from "redux-saga/effects";
import types from "../types";
import axios from "axios";
import { fetchdataSuccess, fetchdataSuccessPokemon } from "../actions";

function* asyncFetchRequest(action) {
  try {
    const url = `https://reqres.in/api/users/${action.payload}`
    const response = yield call(() => axios.get(url))
    yield put(fetchdataSuccess(response.data.data.first_name))
  }
  catch (error) {
    console.log(error)
  }
}

function* asyncFetchPokemonsRequest(action) {
  try {
    //const url = `https://pokeapi.co/api/v2/pokemon`
    const url = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`

    const response = yield call(() => axios.get(url))
    //console.log(response.data.results)
    yield put(fetchdataSuccessPokemon(response.data.results))
  }
  catch (error) {
    console.log(error)
  }
}

export function* watchFetchDataSaga() {
  yield takeEvery(types.SEND_REQUEST, asyncFetchRequest)
}

export function* watchFetchPokemonSaga() {
  yield takeEvery(types.SEND_REQUEST_POKEMONS, asyncFetchPokemonsRequest)

} 