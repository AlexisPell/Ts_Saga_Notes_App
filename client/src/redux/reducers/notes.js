import {
	NOTES_SUCCESS,
	NOTES_FAIL,
	NOTE_SUCCESS,
	NOTE_FAIL,
} from './../constants'

const initialState = {
	notes: [],
	note: null,
	loading: true,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case NOTES_SUCCESS:
			return {
				...state,
				notes: [...action.payload],
				loading: false,
			}
		case NOTE_SUCCESS:
			return {
				...state,
				note: state.notes.filter((note) => note._id === action.payload._id)[0],
				loading: false,
			}
		case NOTE_FAIL:
			return {
				...state,
				note: null,
				loading: false,
			}
		case NOTES_FAIL:
			return {
				...state,
				notes: [],
				loading: false,
			}
		default:
			return state
	}
}
