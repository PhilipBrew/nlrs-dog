import { MdQuestionAnswer as icon } from 'react-icons/md';

export default {
  name: 'faqs',
  title: 'FAQS',
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
      name: 'faqArr',
      title: 'FAQS',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'faq' }] }],
    },
  ],
};
