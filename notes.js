const notes = [
    dataTypes = {
        id: 1,
        subject: "Data Types",
        date: "April 15th",
        feeling: "* * * * *",
        timeSpent: 2
    },
    dataStructures = {
        id: 2,
        subject: "Data Structures",
        date: "April 15th",
        feeling: "* * * * *",
        timeSpent: 4
    }
]

const noteAboutToday = {
    id: 3,
    subject: "Worst Website",
    date: "April 15th",
    feeling: "* * * *",
    timeSpent: 240
}

notes.push(noteAboutToday);

const createNote = (id, note) => {
    note.id = id;
    note.date = Date();
    notes.push(note);
}

const newNote = {
    subject: "Writing A New Note",
    feeling: "* * * * *",
    timeSpent: 6
}

createNote(4, newNote);

console.log(notes);



// find a note with a 4 star rating

// const noteToFind = "* * * *";

// for (note of notes) {
//     if (note.feeling === noteToFind) {
//         console.log(`Note ${note.id}
//     I learned ${note.subject}.
//     I spent ${note.timeSpent} minutes working on it.
//     I would rate my feeling: ${note.feeling}.
//     ---------------------------`);
//     }
// }