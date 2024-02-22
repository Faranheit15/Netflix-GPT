import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/store/redux/userSlice";
import moviesReducer from "@/store/redux/moviesSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});

export default appStore;
