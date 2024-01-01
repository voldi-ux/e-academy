/** @format */

export const profile_init_state = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  gender: "",
  firstname: "",
  lastname: ""
};

export function authProfilreducer(state, action) {
  
  switch (action.type) {
    case "username": {
      return {
        ...state,
        username: action.payload
      };
    }
    case "email": {
      return {
        ...state,
        email: action.payload
      };
    }
    case "password": {
      return {
        ...state,
        password: action.payload
      };
    }
    case "confirm_password": {
      return {
        ...state,
        confirmPassword: action.payload
      };
    }
    case "firstname": {
      return {
        ...state,
        firstname: action.payload
      };
    }
    case "lastname": {
      return {
        ...state,
        lastname: action.payload
      };
    }
    case "gender": {
      console.log(action);
      return {
        ...state,
        gender: action.payload
      };
    }

    default: {
      return {
        ...state
      };
    }
  }
}
