import { all } from 'redux-saga/effects';

import { watchFetchPokemons } from './fetchDataSaga';
import { watchGetCurrentPokemon } from './getCurrentPokemonSaga';

export default function* rootSaga() {
  yield all([
    watchFetchPokemons(),
    watchGetCurrentPokemon()
  ])
}