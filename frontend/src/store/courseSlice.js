import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  course: null,
  personalDetailId:null,
  familyInformationId:null,
  educationalBackgroundId:null
};

const courseSlice = createSlice({
  name: "Course",
  initialState: initialState,
  reducers: {
    setCourse(state, action) {
      state.course = action.payload;
    },
    setPersonalDetailsId(state, action){
      state.personalDetailId = action.payload;
    },
    setFamilyInformationId(state, action){
      state.familyInformationId = action.payload;
    },
    setEducationalBackgroundId(state, action){
      state.educationalBackgroundId = action.payload;
    },
    resetCourse(state){
      state = initialState;
    }
  },
});

export const { setCourse, setPersonalDetailsId, setFamilyInformationId, setEducationalBackgroundId, resetCourse } = courseSlice.actions;
export default courseSlice.reducer;
