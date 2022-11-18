import React, { useEffect, useState } from "react";
import { getUser } from "../apiCall/apiCalls";

const List = () => {
  const [userData, setUserData] = useState([]);
  const fetchData = async () => {
    const resp = await getUser();
    setUserData(resp);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {userData &&
        userData.map((data, index) => {
          return (
            <>
              <div className="card text-left mb-3 g-2" key={index}>
                <div className="card-body">
                  <h4 className="card-title">{data?.name}</h4>
                  <p className="card-text">{data?.email}</p>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
};
export default List;
