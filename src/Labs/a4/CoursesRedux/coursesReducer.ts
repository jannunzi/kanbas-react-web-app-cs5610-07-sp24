import { createSlice } from "@reduxjs/toolkit";

const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    courses: [
      {
        id: 1,
        title: "React",
      },
      {
        id: 2,
        title: "Redux",
      },
    ],
  },
  reducers: {
    deleteCourse: (state, action) => {
      state.courses = state.courses.filter(
        (course) => course.id !== action.payload
      );
    },
    addCourse: (state, action) => {
      const newCourse = {
        ...action.payload,
        id: state.courses.length + 1,
      };
      state.courses.push(newCourse);
    },
  },
});

export default coursesSlice.reducer;
export const { addCourse, deleteCourse } = coursesSlice.actions;
