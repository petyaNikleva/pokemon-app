import { take, call, all } from 'redux-saga/effects';

import { watchFetchDataSaga, watchFetchPokemonSaga } from './fetchDataSaga';

export default function* rootSaga() {
  yield all([
    watchFetchDataSaga(),
    watchFetchPokemonSaga()
  ])
}