import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./reducers/searchSlice";

// creating store
export default configureStore({
  reducer: {
    search: searchReducer,
  },
});
