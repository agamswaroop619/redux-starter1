import { configureStore } from "@reduxjs/toolkit"; // Assuming you're using Redux Toolkit
import reducer from "./reducer";

const store = configureStore({
  reducer: reducer,
});

export default store;
