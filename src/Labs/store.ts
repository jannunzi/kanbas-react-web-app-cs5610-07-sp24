import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./a4/CounterRedux/counterReducer";
import coursesReducer from "./a4/CoursesRedux/coursesReducer";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    coursesReducer,
  },
});

export default store;
