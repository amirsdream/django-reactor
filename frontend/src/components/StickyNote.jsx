import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {notes} from "../actions";

class StickyNote extends Component {

state = {
  text: "",
  updateNoteId: null,
}
componentDidMount() {
    this.props.fetchNotes();
}

resetForm = () => {
  this.setState({text: "", updateNoteId: null});
}

selectForEdit = (id) => {
  let note = this.props.notes[id];
  this.setState({text: note.text, updateNoteId: id});
}

submitNote = (e) => {
  e.preventDefault();
  if (this.state.updateNoteId === null) {
    this.props.addNote(this.state.text).then(this.resetForm);
  } else {
    this.props.updateNote(this.state.updateNoteId, this.state.text).then(this.resetForm);
  }
}



  render() {
    return (
      <div>
        <h2>Welcome to StickyNote!</h2>
        <hr />
        <h3>Add new note</h3>
        <form onSubmit={this.submitNote}>
          <input
            value={this.state.text}
            placeholder="Enter note here..."
            onChange={(e) => this.setState({text: e.target.value})}
            required />
          <input type="submit" value="Save Note" />
            <button onClick={this.resetForm}>Reset</button>

        </form>
        <h3>Notes</h3>
        <table>
          <tbody>
            {this.props.notes.map((note, id) => (
              <tr key={`note_${id}`}>
                <td>{note.text}</td>
                <td><button onClick={() => this.selectForEdit(id)}>edit</button></td>
                <td><button onClick={() => this.props.deleteNote(id)}>delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {notes: state.notes,
  }
}

const mapDispatchToProps = dispatch => {

  return {
    fetchNotes: () => {
      dispatch(notes.fetchNotes());
    },
    addNote: (text) => {
      return dispatch(notes.addNote(text));
    },
    updateNote: (id, text) => {
    return dispatch(notes.updateNote(id, text));
    },
    deleteNote: (id) => {
    return dispatch(notes.deleteNote(id));
    },
  }
}
//
// const mapDispatchToProps = dispatch => {
//   return {
//     addNote: (text) => {
//       dispatch(notes.addNote(text));
//     },
//     updateNote: (id, text) => {
//       dispatch(notes.addNote(id, text));
//     },
//     deleteNote: (id) => {
//       dispatch(notes.deleteNote(id));
//     },
//   }
// }


export default connect(mapStateToProps, mapDispatchToProps)(StickyNote);