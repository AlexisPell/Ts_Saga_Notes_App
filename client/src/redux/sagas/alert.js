import { takeEvery, put, fork, delay } from 'redux-saga/effects'
import { SET_ALERT } from './../constants'
import { removeAlert } from './../actions/alert'

function* watchSetAlert() {
	yield takeEvery(SET_ALERT, workerSetAlert)
}

function* workerSetAlert(action) {
	yield delay(2500)
	yield put(removeAlert(action.payload.id))
}

const alertSagas = [fork(watchSetAlert)]

export default alertSagas
