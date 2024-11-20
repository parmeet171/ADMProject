import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loaded: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload.user;
      state.loaded = true;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
