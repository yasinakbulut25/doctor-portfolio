import * as ACTION_TYPES from "@/store/actionTypes";

const initialState = {
  sections: [],
  isLoading: false,
  error: null,
};

const sectionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_SECTIONS.REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case ACTION_TYPES.FETCH_SECTIONS.ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload || 'An error occurred!',
      };
    case ACTION_TYPES.FETCH_SECTIONS.SUCCESS:
      return {
        ...state,
        isLoading: false,
        sections: action.payload,
      };
    default:
      return state;
  }
};

export default sectionsReducer;
