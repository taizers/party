import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { useState, useEffect, useLayoutEffect } from 'react';
import { createToast } from './utils/toasts';
import type { RootState, AppDispatch } from './store';
import {
  defaultDelay,
  laptopBreakPoint,
  mobileBreakPoint,
} from './constants.ts';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {
    const timer = setTimeout(
      () => setDebouncedValue(value),
      delay || defaultDelay
    );

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export const useShowErrorToast = (
  error: FetchBaseQueryError | SerializedError | string | undefined
) => {
  useEffect(() => {
    if (typeof error === 'string') {
      createToast.error(error);
      return;
    }

    if (error && 'status' in error) {
      createToast.error({ message: error.data, status: error.status });
    }
  }, [error]);
};

export const useResponsive = () => {
  // screen resolutions
  const [state, setState] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useLayoutEffect(() => {
    // update the state on the initial load
    onResizeHandler();

    // assign the event
    Setup();

    return () => {
      // remove the event
      Cleanup();
    };
  }, []);

  // update the state on window resize
  const onResizeHandler = () => {
    const isMobile = window.innerWidth <= mobileBreakPoint;
    const isTablet =
      window.innerWidth >= mobileBreakPoint &&
      window.innerWidth <= laptopBreakPoint;
    const isDesktop = window.innerWidth > laptopBreakPoint;

    setState({ isMobile, isTablet, isDesktop });
  };

  // debounce the resize call
  // const debouncedCall = useDebounce<()=>void>(onResizeHandler, 500);

  // add event listener
  const Setup = () => {
    window.addEventListener('resize', onResizeHandler, false);
  };

  // remove the listener
  const Cleanup = () => {
    window.removeEventListener('resize', onResizeHandler, false);
  };

  return state;
};
