import { fetchRequest as api } from './fetchRequest';
export const getServices = () => api(`hizmetler`, 'GET');

export const getUser = () => api(`user`, 'GET');
export const getSections = () => api(`sections`, 'GET');
export const getQuestions = () => api(`faqs`, 'GET');
export const getBlogs = () => api(`blogs`, 'GET');
export const getComments = () => api(`comments`, 'GET');
export const getContacts = () => api(`contact`, 'GET');
