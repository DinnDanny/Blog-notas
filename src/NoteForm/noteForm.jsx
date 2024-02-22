// NoteForm.jsx
import React, { Component } from "react";
import './noteForm.css';

class NoteForm extends Component {
  constructor() {
    super();
    this.addNote = this.addNote.bind(this);
  }

  addNote() {
    this.props.addNote(this.textInput.value);
    this.textInput.value='';
   

  };

  render() {
    return (
      <div className="NoteForm">
        <h2>Agregar o Buscar Nota</h2>

        {/* Agregar Nota */}
        <div>
          <label>Agregar Nota:</label>
          <input
            ref={input => { this.textInput = input; }}
            placeholder="Escribe una nota"
            type="text"
          />
          <button onClick={this.addNote}>Agregar</button>
        </div>
      </div>
    );
  }
}

export default NoteForm;
