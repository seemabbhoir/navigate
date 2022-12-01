import React, { useState } from "react";
import { database } from "../helper";
import GetNotes from "./getNotes";

const NotePage = () => {
  const [data, setData] = useState({
    notes: "",
    description: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.notes || !data.description) {
      alert("plz fill all details");
      return;
    }
    database.push(data);
    setData({
      notes: "",
      description: "",
    });
    alert("Add details successfully");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name=""
            id=""
            value={data?.notes}
            className="form-control"
            placeholder="Enter notes"
            onChange={(e) =>
              setData((prevState) => ({ ...prevState, notes: e.target.value }))
            }
          />
        </div>
        <br />
        <div className="form-group">
          <textarea
            type="text"
            name=""
            id=""
            value={data?.description}
            className="form-control"
            placeholder="Enter description"
            onChange={(e) =>
              setData((prevState) => ({
                ...prevState,
                description: e.target.value,
              }))
            }
          />
        </div>
        <button type="submit" className="btn btn-outline-primary">
          Submit
        </button>
        <br />
      </form>
      <GetNotes />
    </>
  );
};

export default NotePage;
