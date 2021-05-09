// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import faqs from './faqs';
import faq from './faq';
import order from './order';
import user from './user';
import dog from './dog';
import contact from './contact';
import coordinate from './coordinate';
import settings from './settings';
import policy from './policy';
import termsAndConditions from './terms-and-conditions';
import cookiePolicy from './cookie-policy';
import privacyPolicy from './privacy-policy';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    settings,
    faqs,
    faq,
    order,
    user,
    dog,
    contact,
    coordinate,
    policy,
    termsAndConditions,
    cookiePolicy,
    privacyPolicy,
  ]),
});
