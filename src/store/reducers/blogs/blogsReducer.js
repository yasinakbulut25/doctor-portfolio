import * as ACTION_TYPES from "@/store/actionTypes";

const initialState = {
  blogs: [],
  isLoading: false,
  error: null,
};

const blogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_BLOGS.REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case ACTION_TYPES.FETCH_BLOGS.ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload || 'An error occurred!',
      };
    case ACTION_TYPES.FETCH_BLOGS.SUCCESS:
      return {
        ...state,
        isLoading: false,
        blogs: action.payload,
      };
    default:
      return state;
  }
};

export default blogsReducer;
