import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../src/features/users/userSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
