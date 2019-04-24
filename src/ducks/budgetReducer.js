import axios from "axios";
//BUDGET REDUCER

let initialState = {
  purchases: [],
  budgetLimit: null,
  loading: false
};

//Action Types
export const REQ_BUDGET_DATA = "REQ_BUDGET_DATA";
export const ADD_PURCHASE = "ADD_PURCHASE";
export const REMOVE_PURCHASE = "REMOVE_PURCHASE";

//Action Creators
export const reqBudgetData = () => {
  let data = axios.get("/api/budget-data").then(res => {
    console.log(res);
    return res.data;
  });
  return {
    type: REQ_BUDGET_DATA,
    payload: data
  };
};
export const addPurchase = (price, description, category) => {
  let data = axios
    .post("/api/budget-data/purchase", { price, description, category })
    .then(res => {
      console.log(res);
      return res.data;
    });
  return {
    type: ADD_PURCHASE,
    payload: data
  };
};
export const removePurchase = id => {
  let data = axios.delete(`/api/budget-data/purchase/${id}`).then(res => {
    console.log(res);
    return res.data;
  });
  return {
    type: REMOVE_PURCHASE,
    payload: data
  };
};

function budgetReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case `${REQ_BUDGET_DATA}_PENDING`:
      return { ...state, loading: true };

    case `${REQ_BUDGET_DATA}_FULFILLED`:
      return { ...state, ...payload, loading: false };

    case `${ADD_PURCHASE}_PENDING`:
      return { ...state, loading: true };

    case `${ADD_PURCHASE}_FULFILLED`:
      return { ...state, purchases: payload, loading: false };

    case `${REMOVE_PURCHASE}_PENDING`:
      return { ...state, loading: true };

    case `${REMOVE_PURCHASE}_FULFILLED`:
      return { ...state, purchases: payload, loading: false };

    default:
      return state;
  }
}

export default budgetReducer;
