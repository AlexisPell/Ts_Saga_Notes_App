import axios, { AxiosPromise } from 'axios'

export const getNotes = async () => {
	const res = await axios.get<AxiosPromise>('http://localhost:5000/api/notes')
	return res.data
}

export const getNote = async (id) => {
	const res = await axios.get<AxiosPromise>(
		`http://localhost:5000/api/notes/${id}`
	)
	return res.data
}
