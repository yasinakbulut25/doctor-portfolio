import * as ACTION_TYPES from "@/store/actionTypes";

const initialState = {
  services: [],
  isLoading: false,
  error: null,
};

const servicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_SERVICES.REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case ACTION_TYPES.FETCH_SERVICES.ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload || 'An error occurred!',
      };
    case ACTION_TYPES.FETCH_SERVICES.SUCCESS:
      return {
        ...state,
        isLoading: false,
        services: action.payload,
      };
    default:
      return state;
  }
};

export default servicesReducer;
