const express = require('express')
const {
	getNotes,
	getNote,
	addNote,
	updateNote,
	deleteNote,
} = require('../controllers/notes')

const { protect } = require('./../middleware/auth')

const router = express.Router()

router.route('/').get(protect, getNotes).post(protect, addNote)
router
	.route('/:noteId')
	.get(protect, getNote)
	.put(protect, updateNote)
	.delete(protect, deleteNote)

module.exports = router
