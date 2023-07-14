import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
  } from '../actions/actions';
  
  const initialState = {
    users: [],
    isLoading: false,
    error: null
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USERS_REQUEST:
        return {
          ...state,
          isLoading: true
        };
      case FETCH_USERS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          users: action.payload
        };
      case FETCH_USERS_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  