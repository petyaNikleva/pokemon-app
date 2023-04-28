import { takeEvery, call, put } from "redux-saga/effects";
import types from "../types";
import axios from "axios";


const baseUrl = `https://pokeapi.co/api/v2/pokemon`

function* getCurrentPokemon(action) {
  const name = action.payload;
  console.log('name', name)
  try {
    const response = yield call(() => axios.get(`${baseUrl}/${name}`))
    console.log('responce', response)
    //const currentPokemon = [...response.data.results];


    // for (let index = 0; index < pokemonList.length; index++) {
    //   const name = pokemonList[index].name;
    //   const getSpriteData = yield call(() => axios.get(`${baseUrl}/${name}`))
    //   const sprite = getSpriteData.data.sprites.front_default
    //   pokemonList[index].sprite = sprite;
    // }
    // yield put(fetchdataSuccessPokemon({ pokemonList, count }))
  }
  catch (error) {
    console.log(error)
  }
}

export function* watchGetCurrentPokemon() {
  yield takeEvery(types.GET_CURRENT_POKEMON, getCurrentPokemon)
}