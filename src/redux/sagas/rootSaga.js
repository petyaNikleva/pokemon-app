import { all } from 'redux-saga/effects';

import { watchFetchPokemons } from './fetchDataSaga';

export default function* rootSaga() {
  yield all([
    watchFetchPokemons()
  ])
}