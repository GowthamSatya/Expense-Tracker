import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./reducers/searchSlice";
import amountReducer from "./reducers/amountSlice";

// creating store
export default configureStore({
  reducer: {
    search: searchReducer,
    amount: amountReducer,
  },
});
