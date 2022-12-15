import React from "react";

const Notes = () => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Note Title</h5>
          <p className="card-text">Note Desc</p>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#editModal"
          >
            Edit
          </button>
          <button className="btn btn-danger mx-3">Delete</button>
        </div>
      </div>
    </>
  );
};

export default Notes;
