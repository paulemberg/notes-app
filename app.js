const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//Customize yargs version
yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Removing note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title)
    }
})
//Create List Command
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: function(){
        console.log('Linting the notes')
    }
})
//Create read Command
yargs.command({
    command: 'read',
    describe: 'Read note',
    handler: function(){
        console.log('Readding the notes')
    }
})

yargs.parse()

//console.log(yargs.argv)
