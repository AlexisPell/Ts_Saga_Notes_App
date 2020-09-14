const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, 'Please add title'],
	},
	text: {
		type: String,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	user: {
		type: mongoose.Schema.ObjectId,
		ref: 'User',
		required: true,
	},
})

module.exports = mongoose.model('Note', NoteSchema)
