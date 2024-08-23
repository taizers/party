import { createSlice } from '@reduxjs/toolkit';

interface IPortfolioState {
  user: {
    login: string;
    email: string;
    roles: string[];
    name: string;
    family_name: string;
    given_name: string;
  } | null;
  token: string | null;
}

const initialState: IPortfolioState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserToken: (state, action) => {
      state.token = action.payload;
    },
    setUserData: (state, action) => {
      state.user = action.payload;
    },
    localLogout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUserToken, setUserData, localLogout } = authSlice.actions;

export default authSlice.reducer;
