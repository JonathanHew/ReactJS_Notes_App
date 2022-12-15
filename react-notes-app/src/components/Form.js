import React from "react";

const Form = () => {
  return (
    <>
      <form>
        <div className="mb-3">
          <label for="title" className="form-label">
            Title
          </label>
          <input type="text" className="form-control" id="title" />
          <div id="errMsg" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Description
          </label>
          <textarea
            name="desc"
            id="desc"
            rows="3"
            className="form-control"
          ></textarea>
        </div>
        <select id="colorInput" name="colorInput" className="form-select">
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
    </>
  );
};

export default Form;
