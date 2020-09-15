import {
	NOTES_REQUEST,
	NOTE_REQUEST,
	NOTE_UPDATE_REQUEST,
} from './../constants'

export const getNotes = () => ({ type: NOTES_REQUEST })

export const getNote = (id) => {
	return { type: NOTE_REQUEST, payload: id }
}
