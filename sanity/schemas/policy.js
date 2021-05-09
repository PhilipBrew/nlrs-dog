import { MdQuestionAnswer as icon } from 'react-icons/md';

export default {
  name: 'policy',
  title: 'Policy',
  icon,
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'content', type: 'text', title: 'Content' },
  ],
};
