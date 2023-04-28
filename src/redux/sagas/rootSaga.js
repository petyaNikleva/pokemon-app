import { all } from 'redux-saga/effects';

import { watchFetchPokemons, watchGetCurrentPokemon } from './fetchDataSaga';

export default function* rootSaga() {
  yield all([
    watchFetchPokemons(),
    watchGetCurrentPokemon()
  ])
}