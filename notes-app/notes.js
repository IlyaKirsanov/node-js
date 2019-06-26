const fs = require('fs');
const chalk = require('chalk');

const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    }
    catch (e) {
        return []
    }
}

const saveNotes = (notes) =>{
    const notesJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', notesJSON);
}


const addNote = (title, body) =>{
    const notes = loadNotes();
    //const duplicateNotes = notes.filter((note) => note.title === title);

    const duplicateNote = notes.find((note) => note.title === title);

    if(!duplicateNote){
        notes.push({
            title:title,
            body: body
        })

        saveNotes(notes);
        console.log(chalk.green.inverse('New note added'))
    }else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes();

    const notesToKeep = notes.filter((note) => note.title!==title)
    // const notesToKeep = notes.filter(function (note) {
    //     return note.title!==title;
    // })

    if(notes.length > notesToKeep.length){
        saveNotes(notesToKeep);
        console.log(chalk.green.inverse(`Note with title ${title} removed!`));
    }else {
        console.log(chalk.red.inverse(`Title does not found`));
    }

}

const listNotes = () =>{
    const notes = loadNotes();
    console.log(chalk.yellow.inverse('Your notes:'))

    notes.forEach((note,index)=>{

        console.log(`${index+1} => ${note.title}`)
    })
}

const readNote = (title) =>{
    const notes = loadNotes();

    const noteForRead = notes.find((note) => note.title === title);

    if(noteForRead!=undefined){
        console.log(chalk.green(noteForRead.title));
        console.log(`Body: ${noteForRead.body}`);
    }else {
        console.log(chalk.red('Note not found'))
    }

}






module.exports = {
    addNotes: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}