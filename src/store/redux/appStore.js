import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/store/redux/userSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default appStore;
