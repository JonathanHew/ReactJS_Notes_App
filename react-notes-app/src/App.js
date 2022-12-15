import React, { useState } from "react";
import Edit from "./components/Edit";
import Form from "./components/Form";
import Notes from "./components/Notes";

const App = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [notes, setNotes] = useState([]);

  console.log(notes)

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
      ></Form>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h1>Your Notes</h1>
            <Notes></Notes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
