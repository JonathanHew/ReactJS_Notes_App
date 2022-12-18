import React, { useState } from "react";
import Edit from "./components/Edit";
import Form from "./components/Form";
import Notes from "./components/Notes";
import './App.css';

const App = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [color, setColor] = useState("red");
  const [notes, setNotes] = useState([]);
  const [edit, setEdit] = useState("");

  return (
    <div>
      <h1 className="text-center">Notes App with ReactJS!</h1>
      <Edit edit={edit} notes={notes} setNotes={setNotes} />
      <Form
        title={title}
        setTitle={setTitle}
        body={body}
        setBody={setBody}
        notes={notes}
        setNotes={setNotes}
        color={color}
        setColor={setColor}
      />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h2>Your Notes</h2>
            {notes.length === 0 ? (
              <div className="card-body">
                <div className="card-body">
                  <p className="card-text">No notes are available</p>
                </div>
              </div>
            ) : (
              notes.map((element) => {
                return (
                  <Notes
                    element={element}
                    key={element.id}
                    notes={notes}
                    setNotes={setNotes}
                    setEdit={setEdit}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
