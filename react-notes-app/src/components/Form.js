import React from "react";
import {v4 as uuid} from "uuid"

const Form = ({title, setTitle, body, setBody, notes, setNotes, color, setColor}) => {

    const submit = (e) => {
        e.preventDefault();
        setNotes((note) => {
            return(
                [...note, {
                    id: uuid(),
                    title:title,
                    body: body,
                    color: color
                }]
            )
        })

        e.target.reset();
        setColor("red");

    }

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <form onSubmit={submit}>
              <div className="mb-3">
                <label for="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Enter Note Title"
                  required
                  onChange={(e) => setTitle(e.target.value)}
                />
                <div id="errMsg" className="form-text"></div>
              </div>
              <div className="mb-3">
                <label for="body" className="form-label">
                  Body
                </label>
                <textarea
                  name="body"
                  id="body"
                  rows="3"
                  className="form-control"
                  placeholder="Enter Note Body"
                  onChange={(e) => setBody(e.target.value)}
                ></textarea>
              </div>
              <select id="color" name="color" className="form-select" value={color} onChange={(e) => setColor(e.target.value)}>
                <option value="red" selected>
                  red
                </option>
                <option value="green">green</option>
                <option value="blue">blue</option>
              </select>

              <button type="submit" className="btn btn-primary mt-3">
                Add Note
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;