import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/store/redux/userSlice";
import moviesReducer from "@/store/redux/moviesSlice";
import gptReducer from "@/store/redux/gptSlice";
import configReducer from "@/store/redux/configSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});

export default appStore;
