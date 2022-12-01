import { createSlice } from "@reduxjs/toolkit";

export const NoteSlice = createSlice({
  name: "notes",
  initialState: {
    googleNotes: null,
    editNote: null,
  },
  reducers: {
    setNotes: (state, action) => {
      state.googleNotes = action.payload;
    },
    setEditNote: (state, action) => {
      state.editNote = action.payload;
    },
  },
});
export const { setNotes, setEditNote } = NoteSlice.actions;
export default NoteSlice.reducer;
