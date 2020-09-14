const asyncHandler = require('./../middleware/async')
const ErrorResponse = require('./../utils/errorResponse')

const Note = require('./../models/Note')

// @desc    Get all notes
// @route   GET /api/notes/
// @access  Private
exports.getNotes = asyncHandler(async (req, res, next) => {
	const notes = await Note.find({ user: req.user.id })

	res.status(200).json(notes)
})

// @desc    Get single note
// @route   GET /api/notes/:noteId
// @access  Private
exports.getNote = asyncHandler(async (req, res, next) => {
	const note = await Note.findById(req.params.noteId)

	if (!note) {
		return next(
			new ErrorResponse(`Note with id ${req.params.noteId} not found :)`, 404)
		)
	}

	res.status(200).json(note)
})

// @desc    Add new note
// @route   POST /api/notes/
// @access  Private
exports.addNote = asyncHandler(async (req, res, next) => {
	req.body.user = req.user.id

	if (!req.user.id) {
		return next(new ErrorResponse(`Not authorised to add a note :)`, 401))
	}

	const note = await Note.create(req.body)

	res.status(201).json(note)
})

// @desc    Update note
// @route   PUT /api/notes/:noteId
// @access  Private
exports.updateNote = asyncHandler(async (req, res, next) => {
	let note = await Note.findById(req.params.noteId)

	if (!note) {
		return next(
			new ErrorResponse(`Note with id ${req.params.noteId} not found :)`, 404)
		)
	}

	if (note.user.toString() !== req.user.id) {
		return next(new ErrorResponse(`Not authorised to update the note :)`, 401))
	}

	note = await Note.findByIdAndUpdate(req.params.noteId, req.body, {
		new: true,
		runValidators: true,
	})

	res.status(203).json(note)
})

// @desc    Delete note
// @route   DELETE /api/notes/:noteId
// @access  Private
exports.deleteNote = asyncHandler(async (req, res, next) => {
	let note = await Note.findById(req.params.noteId)

	if (!note) {
		return next(
			new ErrorResponse(`Note with id ${req.params.noteId} not found :)`, 404)
		)
	}

	if (note.user.toString() !== req.user.id) {
		return next(new ErrorResponse(`Not authorised to delete the note :)`, 401))
	}

	note = await Note.findByIdAndDelete(req.params.noteId)

	res.status(203).json({})
})
