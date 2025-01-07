const generatePromiseActionType = (actionType) => ({
  REQUEST: `${actionType}/REQUEST`,
  SUCCESS: `${actionType}/SUCCESS`,
  ERROR: `${actionType}/ERROR`,
});

export const INITIALIZE_APP = 'INITIALIZE_APP';
export const FETCH_USER_INFOS = generatePromiseActionType('FETCH_USER_INFOS');
export const FETCH_SECTIONS = generatePromiseActionType('FETCH_SECTIONS');
export const FETCH_QUESTIONS = generatePromiseActionType('FETCH_QUESTIONS');
export const FETCH_BLOGS = generatePromiseActionType('FETCH_BLOGS');
export const FETCH_COMMENTS = generatePromiseActionType('FETCH_COMMENTS');
export const FETCH_SERVICES = generatePromiseActionType('FETCH_SERVICES');
export const FETCH_CONTACTS = generatePromiseActionType('FETCH_CONTACTS');
