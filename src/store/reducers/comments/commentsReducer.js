import * as ACTION_TYPES from "@/store/actionTypes";

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_COMMENTS.REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case ACTION_TYPES.FETCH_COMMENTS.ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload || 'An error occurred!',
      };
    case ACTION_TYPES.FETCH_COMMENTS.SUCCESS:
      return {
        ...state,
        isLoading: false,
        comments: action.payload,
      };
    default:
      return state;
  }
};

export default commentsReducer;
