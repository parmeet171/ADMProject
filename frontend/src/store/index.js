import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import courseReducer from "./courseSlice"
import applicationsReducer from "./applicationSlice"


const store = configureStore({
  reducer: {
    user: userReducer,
    course: courseReducer,
    applications: applicationsReducer
  },
});

export default store;
