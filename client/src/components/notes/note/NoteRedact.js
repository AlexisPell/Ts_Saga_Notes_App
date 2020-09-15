import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import {} from './../../../redux/actions/notes'

const Note = ({ notes: { note } }) => {
	const [form, setForm] = useState({
		title: '',
		text: '',
	})
	const { text, title } = form

	useEffect(() => {
		if (note) {
			setForm({
				text: note.text,
				title: note.title,
			})
		}
	}, [note])

	console.log('FORMA', form)

	return (
		<div className='border-right min-vh-100'>
			<h6 className='text-info'>{title}</h6>
			<p>{text}</p>
		</div>
	)
}

const mapStateToProps = (state) => ({
	notes: state.notes,
})

export default connect(mapStateToProps, {})(Note)
