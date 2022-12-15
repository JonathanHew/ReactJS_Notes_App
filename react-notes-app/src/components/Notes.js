import React from "react";

const Notes = ({element}) => {
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
