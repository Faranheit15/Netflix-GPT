import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/store/redux/userSlice";
import moviesReducer from "@/store/redux/moviesSlice";
import gptReducer from "@/store/redux/gptSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
  },
});

export default appStore;
