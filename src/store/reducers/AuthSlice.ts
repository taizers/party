import { createSlice } from '@reduxjs/toolkit';

interface IPortfolioState {
  user: {
    email: string;
    role: string;
    name: string;
  } | null;
  token: string | null;
  location: string | null;
}

const initialState: IPortfolioState = {
  user: null,
  token: null,
  location: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserToken: (state, action) => {
      state.token = action.payload;
    },
    setUserLocation: (state, action) => {
      state.location = action.payload;
    },
    setUserData: (state, action) => {
      state.user = action.payload;
    },
    localLogout: (state) => {
      state.user = null;
      state.token = null;
      state.location = null;
    },
  },
});

export const { setUserToken, setUserData, localLogout, setUserLocation } =
  authSlice.actions;

export default authSlice.reducer;
