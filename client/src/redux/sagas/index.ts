import { all } from 'redux-saga/effects'
import alertSagas from './alert'
import userSagas from './auth'
import notesSagas from './notes'

export default function* rootSaga() {
	yield all([...alertSagas, ...userSagas, ...notesSagas])
}
