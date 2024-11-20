import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  applications: []
};

const applicationSlice = createSlice({
  name: "applications",
  initialState: initialState,
  reducers: {
    setApplications(state, action) {
      state.applications = action.payload;
      state.loaded = true;
    },
    updateApplication(state, action) {
      const { id, status } = action.payload;
    
      const index = state.applications.findIndex(app => app._id === id);
      if (index !== -1) {
        state.applications[index].status = status;
      } 
      
    }
  },
});

export const { setApplications, updateApplication } = applicationSlice.actions;
export default applicationSlice.reducer;
