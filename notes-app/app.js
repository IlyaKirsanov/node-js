const validator = require('validator');
const chalk =require ('chalk');
const yargs = require ('yargs');

const name = require('./utils');
const notes = require('./notes');


yargs.version('1.2.5')

//create add command
yargs.command ({
    command: 'add',
    describe: 'Add a new note',
    builder:{
      title:{
          describe: 'Note title',
          demandOption: true,
          type: 'string'
      },
      body: {
          describe: 'Note body',
          demandOption: true,
          type: 'string'
      }
    },
    handler (argv){
        notes.addNotes(argv.title, argv.body)
    }
})

//create remove command
yargs.command ({
    command: 'rm',
    describe: 'Remove a note',
    builder:{
        title: {
            describe: "Title of the note which will be removed",
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv){
        notes.removeNote(argv.title);
    }
})

//create read command
yargs.command ({
    command: 'read',
    describe: 'Read a note',
    builder:{
        title: {
            describe: "Title of the note which will be readed",
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv){
        notes.readNote(argv.title);
    }
})

//create list command
yargs.command ({
    command: 'list',
    describe: 'Listing notes',
    handler (){
        notes.listNotes()
    }
})

yargs.parse();