import React, { useState } from "react";
import Edit from "./components/Edit";
import Form from "./components/Form";
import Notes from "./components/Notes";

const App = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [color, setColor] = useState("red");
  const [notes, setNotes] = useState([]);

  console.log(notes);

  return (
    <div>
      <Edit></Edit>
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
            <h1>Your Notes</h1>
            {notes.length === 0 ? (
              <div className="card-body">
                <div className="card-body">
                  <p className="card-text">No notes are available</p>
                </div>
              </div>
            ) : (
              notes.map((element) => {
                return <Notes element={element} key={element.id}/>;
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
