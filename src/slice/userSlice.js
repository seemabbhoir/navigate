import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "userData",
  initialState: {
    user:null
  },
  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const { setUserData} = UserSlice.actions;
export default UserSlice.reducer;
