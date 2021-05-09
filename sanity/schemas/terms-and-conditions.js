import { MdQuestionAnswer as icon } from 'react-icons/md';

export default {
  name: 'termsAndConditions',
  title: 'Terms & Conditions',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
    },
    {
      name: 'policyContent',
      title: 'Policy Content',
      type: 'array',
      of: [{ type: 'policy' }],
    },
  ],
};