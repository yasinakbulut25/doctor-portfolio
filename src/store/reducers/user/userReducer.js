import * as ACTION_TYPES from "@/store/actionTypes";

const initialState = {
  infos: {},
  isLoading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_USER_INFOS.REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case ACTION_TYPES.FETCH_USER_INFOS.ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload || 'An error occurred!',
      };
    case ACTION_TYPES.FETCH_USER_INFOS.SUCCESS:
      return {
        ...state,
        isLoading: false,
        infos: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
