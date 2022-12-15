import React from "react";

const Edit = () => {
  return (
    <>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Modal title
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
                  <label for="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Enter Note Title"
                  />
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
                    placeholder="Enter Note Description"
                  ></textarea>
                </div>
                <select
                  id="colorInput"
                  name="colorInput"
                  className="form-select"
                >
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
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
