import React, { Component } from "react";
import './note.css';

class Note extends Component {
    constructor(props) {
        super(props);
        this.noteContent = props.notesContent; // Corregido el nombre de la propiedad
        this.noteId = props.noteId;
    }
    handloRemove(id){
        console.log(id);
    }
    render() {
        return (
            <div className="Note">
                <li>{this.noteId} . {this.noteContent}</li>
            </div>
        );
    }
}

export default Note;
;