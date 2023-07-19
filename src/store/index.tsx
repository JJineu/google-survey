import { configureStore } from "@reduxjs/toolkit";
import { survey } from "./slice/survey";
import { question } from "./slice/question";
// import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    survey: survey.reducer,
    question: question.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch)
