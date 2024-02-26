import { UnknownAction } from "@reduxjs/toolkit";

export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

const initialState = {
  isLoggedIn: false,
};

function authReducer(prevState = initialState, action: UnknownAction) {
  const nextState = { ...prevState };

  if (action.type === LOG_IN) {
    nextState.isLoggedIn = true;
  }
  if (action.type === LOG_OUT) {
    nextState.isLoggedIn = false;
  }

  return nextState;
}

export default authReducer;
