import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AuthReducer from './reducers/AuthSlice.ts';
import { apiSlice } from './api/apiSlice.ts';

const RootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: AuthReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: RootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
  });
};

export type RootState = ReturnType<typeof RootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
