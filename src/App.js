// App.js
import React, { Component } from 'react';
import Note from './Nota/note.jsx';
import NoteForm from './NoteForm/noteForm.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        { noteId: 1, notesContent: 'mi nota' }
      ],
      
    };
    
    this.addNote = this.addNote.bind(this);
   
  }

  addNote(note) {
    let{notes} = this.state;
    notes.push({
      noteId : notes.length + 1,
      notesContent: note
    });
   
    
    this.setState({
      notes 
    });
  }

 

  render() {
    return (
      <div className='notesContainer'>
        <div className='notesHeadre'>
          <h1>Blog de notas</h1>
        </div>
        <div className="NotesBody">
          <ul>
            {this.state.notes.map(note => (
              <Note
                notesContent={note.notesContent}
                noteId={note.noteId}
                key={note.noteId}
               
              />
            ))}
          </ul>
        </div>
        <div className='noteFooter'>
          <NoteForm addNote={this.addNote} />
        </div>
      </div>
    );
  }
}

export default App;
