import { configureStore } from "@reduxjs/toolkit";
import noteSlice from "./slice/noteSlice";
import userSlice from "./slice/userSlice";

export default configureStore({
  reducer:{
    note:noteSlice,
    userData:userSlice
  },
});
