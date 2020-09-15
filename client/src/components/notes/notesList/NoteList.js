import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getNotes } from './../../../redux/actions/notes'

import Note from './Note'

const NoteList = ({ getNotes, auth: { loading }, notes: { notes } }) => {
	useEffect(() => {
		getNotes()
	}, [loading, getNotes])

	return (
		<div className='w-100 border-left border-right min-vh-100'>
			<div className='notes__info border-bottom pt-2'>
				<h6 className='pl-2'>All notes</h6>
				<p className='text-muted pl-2 '>{notes.length.toString()} notes</p>
			</div>
			{notes.map((note) => (
				<Note note={note} key={note._id} />
			))}
		</div>
	)
}

const mapStateToProps = (state) => ({
	auth: state.auth,
	notes: state.notes,
})

export default connect(mapStateToProps, { getNotes })(NoteList)
