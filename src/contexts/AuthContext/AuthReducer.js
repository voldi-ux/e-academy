/** @format */

export const initialState = {
  authenticated: false,
  username: "",
  jwtToken: ""
};

export function authReducer(state, action) {
  switch (action.type) {
    case "authenticate": {
      return {
        ...state,
        authenticated: true,
        jwtToken: action.payload.token,
        username: action.payload.username
      };
    }

    case "logout": {
      return {
        ...state,
        authenticated: false,
        username: "",
        jwtToken: ""
      };
    }

    default:
      return {
        ...state
      };
  }
}
