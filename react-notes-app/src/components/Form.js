import React from "react";

const Form = ({title, setTitle, body, setBody, notes, setNotes}) => {

    const submit = (e) => {
        e.preventDefault();
        console.log(title, body);
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
              <select id="color" name="color" className="form-select">
                <option value="red" selected>
                  Red
                </option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
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
