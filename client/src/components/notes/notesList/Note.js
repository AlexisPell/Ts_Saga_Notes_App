import React from 'react'
import { connect } from 'react-redux'
import { getNote } from './../../../redux/actions/notes'
import './note.scss'

const Note = ({ getNote, note: { title, text, createdAt, _id } }) => {
	const onClick = () => getNote(_id)

	return (
		<div className='note w-100 border-bottom'>
			<p className='note__title'>{title}</p>
			<p className='note__text text-muted'>
				{text.toString().split('').slice(0, 60)}
			</p>
			<div className='note__about'>
				<p className='note__date text-muted'>{createdAt.split('T')[0]}</p>
				<button
					onClick={onClick}
					className='note__link btn btn-sm btn-secondary'
				>
					edit
				</button>
			</div>
		</div>
	)
}

export default connect(null, { getNote })(Note)
