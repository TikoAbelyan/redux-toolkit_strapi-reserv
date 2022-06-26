import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OauthState {
  value: User[];
}

interface User {
  username: string;
  password: string;
  remember: boolean;
}

const initialState: OauthState = {
  value: [{ username: "Tiko", password: "Tiko", remember: true }],
};

export const loginSlice = createSlice({
  name: "oauth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction) => {},
  },
});

export const { login } = loginSlice.actions;
export default loginSlice.reducer;
