import * as ACTION_TYPES from "@/store/actionTypes";

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_CONTACTS.REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case ACTION_TYPES.FETCH_CONTACTS.ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload || 'An error occurred!',
      };
    case ACTION_TYPES.FETCH_CONTACTS.SUCCESS:
      return {
        ...state,
        isLoading: false,
        contacts: action.payload,
      };
    default:
      return state;
  }
};

export default contactsReducer;
