import axios from "axios";

let initialState = {
  email: null,
  firtName: null,
  lastName: null
};

//Action Types
export const REQ_USER_DATA = "REQ_USER_DATA";

//Action creators
export const reqUserData = () => {
  let data = axios.get("/auth/user-data").then(res => {
    console.log(res);
    return res.data;
  });

  return {
    type: REQ_USER_DATA,
    payload: data
  };
};

function userReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case `${REQ_USER_DATA}_FULFILLED`:
      const { email, firstName, lastName } = payload.user;
      return { email, firstName, lastName };
    default:
      return state;
  }
}

export default userReducer;
