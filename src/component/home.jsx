import React, { useContext, useState } from "react";
import UserContext from "../context/userContext";

const Home = () => {
  //    const arr = useState(0);
  //    const sount = arr[0];
  //    const setCount = arr[1];
  // let temp = 0;
  // const [count, setCount] = useState(0);
  // const context = useState(UserContext);
  // console.log("CHECK THIS OUT", context);
  const [count, setCount] = useState(0);
const context = useContext(UserContext);
  console.log("CHECK THIS OUT", context);

  return (
    <>
      <h1>This is Home Page</h1>
      <h1>Counter : {count} </h1>
      <button
        onClick={() => {
          // temp = temp +1;
          setCount(count + 1);
        }}
      >
        Add
      </button>
    </>
  );
};
export default Home;
