import * as ACTION_TYPES from "@/store/actionTypes";

const initialState = {
  questions: [],
  isLoading: false,
  error: null,
};

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_QUESTIONS.REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case ACTION_TYPES.FETCH_QUESTIONS.ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload || 'An error occurred!',
      };
    case ACTION_TYPES.FETCH_QUESTIONS.SUCCESS:
      return {
        ...state,
        isLoading: false,
        questions: action.payload,
      };
    default:
      return state;
  }
};

export default questionsReducer;
