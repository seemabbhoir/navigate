import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { database } from "../helper";
import { setEditNote } from "../slice/noteSlice";

const EditPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { editNote } = useSelector((state) => state.note);

  const [data, setData] = useState({
    description: "",
    notes: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    database.child(editNote.index).update(data);
    dispatch(setEditNote(null));
    navigate("/notepage");
  };

  useEffect(() => {
    if (editNote == null) {
      navigate("/notepage");
    } else {
      setData({
        description: editNote.info.description,
        notes: editNote.info.notes,
      });
    }
  }, []);

  return (
    <>
      <h1>This is Edit Page</h1>
      <br />

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            value={data?.notes}
            className="form-control"
            placeholder="Enter Notes"
            onChange={(e) =>
              setData((prevState) => ({ ...prevState, notes: e.target.value }))
            }
          />
        </div>
        <br />
        <div className="form-group">
          <textarea
            value={data.description}
            type="text"
            className="form-control"
            placeholder="Enter Description"
            onChange={(e) =>
              setData((prevState) => ({
                ...prevState,
                description: e.target.value,
              }))
            }
          />
        </div>
        <br />
        <button type="submit" className="btn btn-outline-primary">
          Sumbit
        </button>
        <button
          type="button"
          className="btn btn-outline-danger"
          style={{ marginLeft: "25px" }}
          onClick={() => {
            dispatch(setEditNote(null));
            navigate("/notepage");
          }}>
          Back
        </button>
      </form>
    </>
  );
};

export default EditPage;
