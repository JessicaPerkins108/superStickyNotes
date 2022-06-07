import React from "react";
import Note from "./Note.js";
import "./index.css";

const NotesList = (props) => {
  const keepSearchMatches = (note) => note.doesMatchSearch;
  const searchMatches = props.notes.filter(keepSearchMatches);

  const renderNote = (note) => (
    <Note
      removeNote={props.removeNote}
      note={note}
      key={note.id}
      onType={props.onType}
    />
  );

  const noteElements = searchMatches.map(renderNote);
  return <ul className="notes-list main">{noteElements}</ul>;
};

export default NotesList;
