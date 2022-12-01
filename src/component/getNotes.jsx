import React from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { database } from "../helper";
import { setEditNote } from "../slice/noteSlice";
import { useNavigate } from "react-router";

const GetNotes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { googleNotes } = useSelector((state) => state.note);
  const handleDeleteNote = (id) => {
    database.child(id).remove(); 
  };

  const handleUpdate = (info, index) => {
    dispatch(setEditNote({info, index}));
    navigate(`/editNote/${index}`);
  };

  return (
    <>
      <h3>These are your Notes</h3>
      {googleNotes == null
        ? "There are no Notes Available "
        : _.map(googleNotes, (data, index) => {
            return (
              <div className="card mb-3" key={index}>
                <div className="card-body">
                  <h4 className="card-title">{data.notes}</h4>
                  <p className="card-text">{data.description}</p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ marginRight: "25px" }}
                    onClick={() => handleUpdate(data, index)}
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => handleDeleteNote(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
      {}
    </>
  );
};

export default GetNotes;
