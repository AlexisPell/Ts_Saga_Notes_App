import React from 'react'

import NotesList from './notesList/NoteList'
import NoteRedact from './note/NoteRedact'

const Notes = () => {
	return (
		<div className='min-vh-100'>
			<h3 className='w-100 text-center my-3'>Notes list here</h3>
			<div className='row border-top'>
				<div className='col-5 p-0'>
					<NotesList />
				</div>
				<div className='col-7 p-0'>
					<NoteRedact />
				</div>
			</div>
		</div>
	)
}

export default Notes
