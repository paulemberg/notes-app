const fs = require('fs')
const chalk = require('chalk');
const log = console.log;

const getNotes = function () {
    return "Your notes..."
}

const addNote = function (title, body) {
    const notes = loadNotes()

    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        log(chalk.green.inverse('New note added!'))
    } else {
        log(chalk.green.inverse('Note title taken!'))
    }

}

const removeNote = function (title) {
    const notes = loadNotes()
    const notesKeep = notes.filter(function (note) {
        return note.title !== title
    })

    if (notes.length > notesKeep.length) {
        saveNotes(notesKeep)
        log(chalk.green.inverse('Note Removed'))
    } else {
        return log(chalk.red.inverse('No note found!'))
    }
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {

    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()

        return JSON.parse(dataJSON)

    } catch (e) {
        return []
    }

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}