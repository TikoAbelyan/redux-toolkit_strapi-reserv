import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Oauth {
  username: string;
  password: string;

  remember: boolean;
}

interface User {
  value: Oauth[];
}
const initialState: User = {
  value: [{ username: "Tiko", password: "Tiko", remember: true }],
};

export const loginSlice = createSlice({
  name: "oauth",
  initialState,
  reducers: {
    login: () => {},
  },
});

export const { login } = loginSlice.actions;
export default loginSlice.reducer;
