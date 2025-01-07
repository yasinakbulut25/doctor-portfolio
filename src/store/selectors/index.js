import * as USER_SELECTORS from './userSelectors';
import * as SECTIONS_SELECTORS from './sectionsSelectors';
import * as QUESTIONS_SELECTORS from './questionsSelectors';
import * as BLOGS_SELECTORS from './blogsSelectors';
import * as COMMENTS_SELECTORS from './commentsSelectors';
import * as SERVICES_SELECTORS from './servicesSelectors';
import * as CONTACT_SELECTORS from './contactsSelectors';

export default {
  ...USER_SELECTORS,
  ...SECTIONS_SELECTORS,
  ...QUESTIONS_SELECTORS,
  ...BLOGS_SELECTORS,
  ...COMMENTS_SELECTORS,
  ...SERVICES_SELECTORS,
  ...CONTACT_SELECTORS
};
