import React from "react";

const Notes = ({ element, notes, setNotes, setEdit }) => {
  const deleteNote = (id) => {
    const resetNotes = notes.filter((note) => {
      if (note.id !== id) {
        return note;
      }
    });

    setNotes(resetNotes);
    setEdit(id);
  };

  const editNote = (id) => {
    const editTitle = document.getElementById("editTitle");
    const editBody = document.getElementById("editBody");
    const editColor = document.getElementById("editColor");

    notes.filter((note) => {
      if (note.id === id) {
        editTitle.value = note.title;
        editBody.value = note.body;
        editColor.value = note.color;
      }
    });
  };
  return (
    <>
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">{element.title}</h5>
          <p className="card-text">{element.body}</p>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#editModal"
            onClick={() => {
              editNote(element.id);
            }}
          >
            Edit
          </button>
          <button
            className="btn btn-danger mx-3"
            onClick={() => {
              deleteNote(element.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Notes;
