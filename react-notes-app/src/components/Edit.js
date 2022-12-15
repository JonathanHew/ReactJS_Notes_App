import React from "react";

const Edit = ({edit, notes, setNotes}) => {
  return (
    <>
      <div
        class="modal fade"
        id="editModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div className="mb-3">
                  <label for="editTitle" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="editTitle"
                    placeholder="Enter Note Title"
                  />
                  <div id="errMsg" className="form-text"></div>
                </div>
                <div className="mb-3">
                  <label for="editBody"className="form-label">
                    Body
                  </label>
                  <textarea
                    name="editBody"
                    id="editBody"
                    rows="3"
                    className="form-control"
                    placeholder="Enter Note Body"
                  ></textarea>
                </div>
                <select
                  id="editColor"
                  name="editColor"
                  className="form-select"
                >
                  <option value="red" selected>
                    red
                  </option>
                  <option value="green">green</option>
                  <option value="blue">blue</option>
                </select>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
