import { SET_ALERT, REMOVE_ALERT } from './../constants'
import { v4 as uuid } from 'uuid'

export const removeAlert = (id) => ({
	type: REMOVE_ALERT,
	payload: { id },
})

export const setAlert = (msg, alertType) => {
	const id = uuid()
	return { type: SET_ALERT, payload: { msg, alertType, id } }
}
