import { takeEvery, takeLatest, put, call, fork } from 'redux-saga/effects'
import {
	NOTES_REQUEST,
	NOTES_SUCCESS,
	NOTES_FAIL,
	NOTE_REQUEST,
	NOTE_SUCCESS,
	NOTE_FAIL,
} from './../constants'
import { getNotes, getNote } from './../api/notes'

function* watchGetNotes() {
	yield takeEvery(NOTES_REQUEST, workerGetNotes)
}

function* workerGetNotes() {
	try {
		const res = yield call(getNotes)
		yield put({ type: NOTES_SUCCESS, payload: res })
	} catch (error) {
		yield put({ type: NOTES_FAIL, payload: error })
	}
}

function* watchGetNote() {
	yield takeEvery(NOTE_REQUEST, workerGetNote)
}

function* workerGetNote({ payload }) {
	try {
		const res = yield call(getNote, payload)
		yield put({ type: NOTE_SUCCESS, payload: res })
	} catch (error) {
		yield put({ type: NOTE_FAIL, payload: error })
	}
}

const notesSagas = [fork(watchGetNotes), fork(watchGetNote)]

export default notesSagas
