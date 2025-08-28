import { configureStore, createSlice } from "@reduxjs/toolkit";

export interface UserState {
  username: string;
  isLoggedIn: boolean;
}

const userSlice = createSlice({
  name: "user",
  initialState: { isLoggedIn: false, username: "" } as UserState,
  reducers: {
    login: (state, action) => {
      state.username = action.payload.username;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.username = "";
    },
  },
});

export const { login, logout } = userSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
